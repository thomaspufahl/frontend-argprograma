import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

	isLogged!: boolean;

	constructor(private readonly router: Router) { }

	ngOnInit(): void {
		this.isLogged = this.router.url.includes('logged') ? true : false;
		if (window.sessionStorage.getItem('TM') == 'true') {
			window.sessionStorage.setItem('TM', 'false');
			this.sleep(4000).then(() => {
				this.refresh();
			});
		}
	}

	sleep = (milliseconds: number) => new Promise((r) => setTimeout(r, milliseconds));

	refresh(): void {
		window.location.reload();
	}
}