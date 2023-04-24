import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@app/core/models/user.model';
import { AuthService } from '@core/authentication/auth.service';
import { TokenService } from '@core/services/token/token.service';

@Component({
	selector: 'app-register-form',
	templateUrl: './register-form.component.html',
	styleUrls: ['./register-form.component.sass']
})
export class RegisterFormComponent implements OnInit {

	user!: User;

	constructor(
		private readonly tokenSvc: TokenService,
		private readonly authSvc: AuthService,
		private readonly router: Router,
	) { }

	ngOnInit(): void {
	}

	onRegister(form: any): void {
		this.user = new User(form.value.email, form.value.password);
		this.authSvc.register(this.user).subscribe(
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
