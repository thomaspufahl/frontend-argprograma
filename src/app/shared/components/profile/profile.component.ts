import { Component, Input } from '@angular/core';
import { Person } from '@models/person.model'

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {

	@Input() person!: Person;
	@Input() img!: String;
}
