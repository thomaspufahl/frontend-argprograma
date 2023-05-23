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
	}

	refresh(): void {
		window.location.reload();
	}
}