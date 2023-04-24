import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '@app/core/services/token/token.service';
import { PersonService } from '@core/http/person/person.service';
import { Person } from '@models/person.model'

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

	isLogged!: boolean;

	defaultPerson: Person = new Person('firstname', 'lastname', 'description');
	defaultImg: String = 'https://picsum.photos/1920/1080';

	// VALUES TO SEND TO THE API
	img: String = this.defaultImg;
	person: Person = this.defaultPerson;

	constructor(
		private readonly router: Router,
		private readonly personSvc: PersonService,
		private readonly tokenSvc: TokenService,
	) { }

	ngOnInit(): void {
		this.isLogged = this.router.url.includes('logged') ? true : false;
		this.personSvc.getOneByUserEmail(this.tokenSvc.getSubject()).subscribe((person: Person) => {
			if (person.firstname != null) { this.person.setFirstname(person.firstname); }
			if (person.lastname != null) { this.person.setLastname(person.lastname); }
			if (person.description != null) { this.person.setDescription(person.description); }
		});
	}

	onFakeUpdate(form: any): void {
		if (form.value.firstname != '') {
			this.person.firstname = form.value.firstname
		}
		if (form.value.lastname != '') {
			this.person.lastname = form.value.lastname
		}
		if (form.value.description != '') {
			this.person.description = form.value.description
		}
		this.onUpdate()
	}

	onUpdate() {
		if (!this.tokenSvc.existsToken()) { return }
		if (this.tokenSvc.isExpired()) { return }

		const email = this.tokenSvc.getSubject();
		this.personSvc.editPersonByUserEmail(email, this.person).subscribe();
	}

}
