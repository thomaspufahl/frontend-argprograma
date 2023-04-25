import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
	selector: 'app-visitor',
	templateUrl: './visitor.component.html',
	styleUrls: ['./visitor.component.sass']
})
export class VisitorComponent implements OnInit {

	@Input() isLogged!: boolean;

	constructor(private readonly router: Router) { }

	ngOnInit(): void {
		this.isLogged = this.router.url.includes('logged') ? true : false;
	}

}
