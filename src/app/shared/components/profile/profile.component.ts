import { Component, Input, OnInit } from '@angular/core';
import { Person } from '@core/models/person.model';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

	@Input() person!: Person;
	@Input() img!: String;


	constructor() { }

	ngOnInit(): void {

	}

}
