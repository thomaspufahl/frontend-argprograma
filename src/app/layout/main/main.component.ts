import { Component } from '@angular/core';

@Component({
	selector: 'app-main',
	template: `
	<app-header></app-header>
		<div class="container">
			<router-outlet></router-outlet>
		</div>
	<app-footer></app-footer>`,
	styleUrls: ['./main.component.sass']
})
export class MainComponent {

}
