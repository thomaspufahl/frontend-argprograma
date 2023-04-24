import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/authentication/auth.service';
import { TokenService, tokenGetter } from '@core/services/token/token.service';
import { User } from '@models/user.model';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

	user!: User;

	constructor(
		private readonly tokenSvc: TokenService,
		private readonly authSvc: AuthService,
		private readonly router: Router
	) { }

	ngOnInit(): void {
	}

	onLogin(form: any): void {
		this.user = new User(form.value.email, form.value.password);
		this.authSvc.authenticate(this.user).subscribe(
			userData => {
				this.tokenSvc.setToken(userData.token);
				this.router.navigate(['/logged']);
			},
			err => {
				console.log(err);
			}
		);
	}

}
