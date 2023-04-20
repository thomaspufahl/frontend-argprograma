import { Component, OnInit } from '@angular/core';
import { PersonService } from '@core/http/person/person.service';
import { Person } from '@core/models/person.model';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

	persons: Person[] = [];

	constructor(private readonly personService: PersonService) { }

	ngOnInit(): void {
		this.getPerson();
	}

	public getPerson() {
		this.personService.getPersons().subscribe((data) => { this.persons.push(...data) });
	}

}
