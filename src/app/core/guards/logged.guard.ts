import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService, tokenGetter } from '../services/token/token.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
	providedIn: 'root'
})
export class LoggedGuard implements CanActivate {

	constructor(
		private readonly router: Router,
		private readonly jwtHelper: JwtHelperService,
		private readonly tokenService: TokenService
	) { }

	canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

		let exitCondition = true;

		if (!this.tokenService.existsToken()) { exitCondition = false; }
		if (this.tokenService.isExpired()) { exitCondition = false; }
		if (this.isLogged()) { exitCondition = true; }

		if (!exitCondition) {
			alert("You don't have permission to access this page! Please log in.");
			this.router.navigate(['/login']);
		}
		return exitCondition;
	}

	public isLogged() {

		const token = tokenGetter();
		const payLoad = this.jwtHelper.decodeToken(token!)

		if (payLoad === null) { return false; }
		return payLoad.logged;
	}
}
