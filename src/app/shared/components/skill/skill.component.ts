import { Component, Input, OnInit } from '@angular/core';
import { PersonService } from '@app/core/http/person/person.service';
import { SkillService } from '@app/core/http/skill/skill.service';
import { Person } from '@app/core/models/person.model';
import { Skill } from '@app/core/models/skill.model';
import { TokenService } from '@app/core/services/token/token.service';

@Component({
	selector: 'app-skill',
	templateUrl: './skill.component.html',
	styleUrls: ['./skill.component.sass']
})
export class SkillComponent implements OnInit {

	@Input() isLogged!: boolean;

	defaultSkill: Skill = new Skill("Skill", 20);
	defaultPerson: Person = new Person();

	// VALUES TO SEND TO THE API
	skills: Skill[] = [];
	person: Person = this.defaultPerson;

	constructor(
		private readonly skillSvc: SkillService,
		private readonly personSvc: PersonService,
		private readonly tokenSvc: TokenService
	) { }

	ngOnInit(): void {
		this.skills.push(this.defaultSkill);

		if (!this.tokenSvc.existsToken()) { return }
		if (this.tokenSvc.isExpired()) { return }


		this.personSvc.getOneByUserEmail(this.tokenSvc.getSubject()).subscribe((personData: Person) => {
			this.person.setId(personData.id);
			if (personData.firstname != null) { this.person.setFirstname(personData.firstname); }
			if (personData.lastname != null) { this.person.setLastname(personData.lastname); }
			if (personData.description != null) { this.person.setDescription(personData.description); }

			this.skillSvc.getListByPerson(this.person).subscribe((skills: Skill[]) => {
				this.skills = skills;
			});

		});

	}

	addSkill(form: any): void {
		if (!this.tokenSvc.existsToken()) { return }
		if (this.tokenSvc.isExpired()) { return }

		let percentage = 0;
		if (form.value.percentage != '' && form.value.percentage >= 0) {
			percentage = form.value.percentage
		}

		this.skills.push(new Skill(form.value.name, percentage));
		let email = this.tokenSvc.getSubject();
		if (email == null) { return }

		this.personSvc.getOneByUserEmail(email).subscribe((personData: any) => {
			this.skillSvc.create(new Skill(form.value.name, percentage, new Person('', '', '', '', '', personData.id))).subscribe();
		});
	}

	deleteThisSkill(skill_id: number): void {
		if (!this.tokenSvc.existsToken()) { return }
		if (this.tokenSvc.isExpired()) { return }

		confirm("Are you sure to delete this skill?") ? this.skillSvc.deleteById(skill_id).subscribe() : null;
	}

	onFakeSkillUpdate(form: any): void {
		if (form.value.name != '') { this.skills.find((skill: Skill) => skill.id == form.value.id)!.name = form.value.name; }
		let percentage = -1;
		if (form.value.percentage != '' && form.value.percentage >= 0) {
			percentage = form.value.percentage
			this.skills.find((skill: Skill) => skill.id == form.value.id)!.percentage = form.value.percentage;
		}

		console.log(percentage)
		this.onSkillUpdate(form.value.id, new Skill(form.value.name, percentage, new Person('', '', '', '', '', this.person.id)));
	}

	onSkillUpdate(skill_id: number, skill: Skill): void {
		if (!this.tokenSvc.existsToken()) { return }
		if (this.tokenSvc.isExpired()) { return }

		this.skillSvc.update(skill_id, skill).subscribe();
	}

}
