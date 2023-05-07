import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService, tokenGetter } from '@app/core/services/token/token.service';
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

	isLoggedIn = false;

	constructor(private readonly router: Router, private readonly tokenSvc: TokenService) { }


	ngOnInit(): void {
		this.isLoggedIn = tokenGetter() ? true : false;
	}

	onLogOut() {
		this.tokenSvc.removeToken();
		window.location.reload();
	}

	goToLogIn() {
		this.router.navigate(['/login']);
	}
}
