import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '@app/core/services/token/token.service';
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {


	constructor(private readonly router: Router, private readonly tokenSvc: TokenService) { }


	ngOnInit(): void {
	}

	onLogOut() {
		this.tokenSvc.removeToken();
		window.location.reload();
	}

	goToLogIn() {
		this.router.navigate(['/login']);
	}
}
