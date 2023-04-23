import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-logo',
	template: `
		<div (click)="goHome()">
			<img src="../../../assets/images/logo.png" alt="Argentina programa logo">
			<span>Thomas Pufahl</span>
		</div>`,
	styleUrls: ['./logo.component.sass']
})
export class LogoComponent {

	constructor(private readonly router: Router) { }

	goHome(): void {
		this.router.navigate(['/']);
	}
}
