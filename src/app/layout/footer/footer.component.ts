import { Component } from '@angular/core';

@Component({
	selector: 'app-footer',
	template: `
	<footer>
		<div class="border-orange-weak"></div>
		<p><i>@copyright sucks</i></p>
	</footer>`,
	styleUrls: ['./footer.component.sass']
})
export class FooterComponent {

}
