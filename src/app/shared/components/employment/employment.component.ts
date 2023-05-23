import { Component, Input, OnInit } from '@angular/core';
import { EmploymentService } from '@app/core/http/employment/employment.service';
import { Employment } from '@models/employment.model';
import { TokenService } from '@core/services/token/token.service';
import { PersonService } from '@app/core/http/person/person.service';
import { Person } from '@app/core/models/person.model';
import { Responsibility } from '@app/core/models/responsibility.model';

@Component({
	selector: 'app-employment',
	templateUrl: './employment.component.html',
	styleUrls: ['./employment.component.sass']
})
export class EmploymentComponent implements OnInit {

	@Input() isLogged!: boolean;

	defaultEmployment: Employment = new Employment("Job", "Company", "YYYY-MM-DD", "YYYY-MM-DD");
	defaultResponsibility: Responsibility = new Responsibility("Responsibility");
	defaultPerson: Person = new Person();

	// VALUES TO SEND TO THE API
	employments: Employment[] = [];
	person: Person = this.defaultPerson;

	constructor(
		private readonly employmentSvc: EmploymentService,
		private readonly personSvc: PersonService,
		private readonly tokenSvc: TokenService,
	) { }

	ngOnInit(): void {
		this.employments.push(this.defaultEmployment);
		this.employments[0].responsibilities = [this.defaultResponsibility];

		if (!this.tokenSvc.existsToken()) { return }
		if (this.tokenSvc.isExpired()) { return }

		this.personSvc.getOneByUserEmail(this.tokenSvc.getSubject()).subscribe((personData: Person) => {
			this.person.setId(personData.id);
			if (personData.firstname != null) { this.person.setFirstname(personData.firstname); }
			if (personData.lastname != null) { this.person.setLastname(personData.lastname); }
			if (personData.description != null) { this.person.setDescription(personData.description); }

			this.employmentSvc.getListByPerson(this.person).subscribe((employments: Employment[]) => {
				this.employments = employments;
				for (let employment of employments) {
					this.employmentSvc.getListResponsibilitiesByEmployment(employment).subscribe((responsibilities: Responsibility[]) => {
						let responsibilitiesModel = responsibilities.map((responsibility: Responsibility) => new Responsibility(responsibility.description, responsibility.id));
						this.employments[this.employments.indexOf(employment)].responsibilities = responsibilitiesModel;
					});
				}
			});
		});
	}

	addEmployment(form: any): void {
		console.log(form.value);
		this.employments.push(new Employment(form.value.position, form.value.employeer, form.value.start, form.value.end));
		let email = this.tokenSvc.getSubject();
		this.personSvc.getOneByUserEmail(email).subscribe(
			(person: Person) => {
				person.id
				this.employmentSvc.create(new Employment(form.value.position, form.value.employeer, form.value.start, form.value.end, new Person('', '', '', '', '', person.id))).subscribe();
				this.ngOnInit();
			}
		);
	}

	addResponsibility(form: any): void {
		this.employmentSvc.createResponsibility(new Responsibility(form.value.description), form.value.id).subscribe();
		this.ngOnInit();
	}

	deleteThisEmployment(employment_id: number) {
		confirm("Are you sure you want to delete this employment? This option includes responsibilities") ? this.employmentSvc.deleteById(employment_id).subscribe() : null;
		this.ngOnInit();
	}

	deleteThisResponsibility(responsibility_id: number) {
		confirm("Are you sure you want to delete this responsibility?") ? this.employmentSvc.deleteResponsibilityById(responsibility_id).subscribe() : null;
		this.ngOnInit();
	}

	onFakeEmploymentUpdate(form: any): void {
		if (form.value.position != '') { this.employments.find((employment: Employment) => employment.id == form.value.id)!.position = form.value.position; }
		if (form.value.employeer != '') { this.employments.find((employment: Employment) => employment.id == form.value.id)!.employeer = form.value.employeer; }
		if (form.value.start != '') { this.employments.find((employment: Employment) => employment.id == form.value.id)!.start = form.value.start; }
		if (form.value.end != '') { this.employments.find((employment: Employment) => employment.id == form.value.id)!.end = form.value.end; }

		this.onEmploymentUpdate(form.value.id, new Employment(form.value.position, form.value.employeer, form.value.start, form.value.end));
	}

	onEmploymentUpdate(employment_id: number, employment: Employment): void {
		if (!this.tokenSvc.existsToken()) { return }
		if (this.tokenSvc.isExpired()) { return }

		this.employmentSvc.update(employment_id, employment).subscribe(
			() => {
				this.ngOnInit();
			}
		);
	}

	onFakeResponsibilityUpdate(form: any): void {
		for (let employment of this.employments) {
			for (let responsibility of employment.responsibilities) {
				if (responsibility.id == form.value.id) {
					if (form.value.description != '') { responsibility.description = form.value.description; }
				}
			}
		}

		this.onResponsibilityUpdate(form.value.id, new Responsibility(form.value.description));
	}

	onResponsibilityUpdate(responsibility_id: number, responsibility: Responsibility): void {
		if (!this.tokenSvc.existsToken()) { return }
		if (this.tokenSvc.isExpired()) { return }

		this.employmentSvc.updateResponsibility(responsibility_id, responsibility).subscribe(
			() => {
				this.ngOnInit();
			}
		);
	}
}
