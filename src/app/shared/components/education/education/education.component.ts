import { Component, Input, OnInit } from '@angular/core';
import { EducationService } from '@app/core/http/education/education.service';
import { PersonService } from '@app/core/http/person/person.service';
import { Education } from '@app/core/models/education.model';
import { Person } from '@app/core/models/person.model';
import { TokenService } from '@app/core/services/token/token.service';

@Component({
	selector: 'app-education',
	templateUrl: './education.component.html',
	styleUrls: ['./education.component.sass']
})
export class EducationComponent implements OnInit {

	@Input() isLogged!: boolean;

	defaultEducation: Education = new Education("Title Degree", "Name School", "YYYY-MM-DD", "YYYY-MM-DD", "Description degree");
	defaultPerson: Person = new Person();

	// VALUES TO SEND TO THE API
	educations: Education[] = [];
	person: Person = this.defaultPerson;

	constructor(
		private readonly educationSvc: EducationService,
		private readonly personSvc: PersonService,
		private readonly tokenSvc: TokenService,
	) { }

	ngOnInit(): void {
		this.educations.push(this.defaultEducation);

		if (!this.tokenSvc.existsToken()) { return }
		if (this.tokenSvc.isExpired()) { return }

		this.personSvc.getOneByUserEmail(this.tokenSvc.getSubject()).subscribe((personData: any) => {
			this.person.setId(personData.id);
			if (personData.firstname != null) { this.person.setFirstname(personData.firstname); }
			if (personData.lastname != null) { this.person.setLastname(personData.lastname); }
			if (personData.description != null) { this.person.setDescription(personData.description); }

			this.educationSvc.getListByPerson(this.person).subscribe((educations: Education[]) => {
				this.educations = educations;
			});
		});

	}

	addEducation(form: any): void {
		if (!this.tokenSvc.existsToken()) { return }
		if (this.tokenSvc.isExpired()) { return }

		this.educations.push(new Education(form.value.degree, form.value.school, form.value.start, form.value.end, form.value.description));
		let email = this.tokenSvc.getSubject();
		if (email == null) { return }

		this.personSvc.getOneByUserEmail(email).subscribe((personData: any) => {
			this.educationSvc.create(new Education(form.value.degree, form.value.school, form.value.start, form.value.end, form.value.description, new Person('', '', '', '', '', personData.id))).subscribe(
				() => {
					this.ngOnInit();
				}
			);
		});
	}

	deleteThisEducation(education_id: number) {
		confirm("Are you sure you want to delete this education?") ? this.educationSvc.deleteById(education_id).subscribe(
			() => {
				this.ngOnInit();
			}
		) : console.log("cancel");
	}

	onFakeEducationUpdate(form: any): void {
		if (form.value.degree != '') { this.educations.find((education: Education) => education.id == form.value.id)!.degree = form.value.degree; }
		if (form.value.school != '') { this.educations.find((education: Education) => education.id == form.value.id)!.school = form.value.school; }
		if (form.value.start != '') { this.educations.find((education: Education) => education.id == form.value.id)!.start = form.value.start; }
		if (form.value.end != '') { this.educations.find((education: Education) => education.id == form.value.id)!.end = form.value.end; }
		if (form.value.description != '') { this.educations.find((education: Education) => education.id == form.value.id)!.description = form.value.description; }

		this.onEducationUpdate(form.value.id, new Education(form.value.degree, form.value.school, form.value.start, form.value.end, form.value.description));
	}

	onEducationUpdate(education_id: number, education: Education): void {
		if (!this.tokenSvc.existsToken()) { return }
		if (this.tokenSvc.isExpired()) { return }

		this.educationSvc.update(education_id, education).subscribe(
			() => {
				this.ngOnInit();
			}
		);
	}



}
