import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-employment',
	templateUrl: './employment.component.html',
	styleUrls: ['./employment.component.sass']
})
export class EmploymentComponent {

	@Input() isLogged!: boolean;

}
