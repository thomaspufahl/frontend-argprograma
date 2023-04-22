import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/authentication/auth.service';
import { TokenService } from '@core/services/token/token.service';
import { User } from '@models/user.model';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

	isLogged: boolean = false;
	isLogginFail: boolean = false;
	user!: User;

	errorMessage!: String;

	constructor(
		private readonly tokenSvc: TokenService,
		private readonly authSvc: AuthService,
		private readonly router: Router
	) { }

	ngOnInit(): void {
		if (this.tokenSvc.getToken()) {
			this.isLogged = true;
			this.isLogginFail = false;
		}
	}

	onLogin(loginForm: any): void {
		this.user = new User(loginForm.value.email, loginForm.value.password);
		this.authSvc.authenticate(this.user).subscribe(
			user => {
				this.isLogged = true;
				this.isLogginFail = false;

				this.tokenSvc.setToken(user.token);
				this.tokenSvc.setEmail(user.email);
				console.log("TOKEN: EMAIL", user.email);
				this.tokenSvc.setAuthorities(user.authorities);
				console.log("TOKEN: AUTHORITIES", user.authorities);
				this.router.navigate(['/']); // Navigate to /ADMIN
			},
			err => {
				this.isLogged = false;
				this.isLogginFail = true;
				this.errorMessage = err.error.message;
				console.log(this.errorMessage);
			}
		);
	}

}
