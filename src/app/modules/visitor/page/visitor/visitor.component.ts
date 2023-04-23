import { Component, OnInit } from '@angular/core';
import { PersonService } from '@app/core/http/person/person.service';
import { Person } from '@models/person.model';
@Component({
	selector: 'app-visitor',
	templateUrl: './visitor.component.html',
	styleUrls: ['./visitor.component.sass']
})
export class VisitorComponent implements OnInit {

	defaultPerson: Person = new Person('firstname', 'lastname', 'description');
	defaultImg: String = 'https://picsum.photos/1920/1080';

	persons: Person[] = []

	constructor(private readonly personSvc: PersonService) { }

	ngOnInit(): void {
	}
}
