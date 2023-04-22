import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token/token.service';

@Injectable({
	providedIn: 'root'
})
export class LoggedGuard implements CanActivate {

	constructor(private readonly router: Router, private readonly tokenSvc: TokenService) { }

	canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		if (this.isLogged()) {
			return true;
		}
		alert("You don't have permission to access this page! Please log in.");
		this.router.navigate(['/']);
		return false;
	}

	isLogged(): boolean {
		if (this.tokenSvc.getAuthorities().toString() == ('ADMIN' || 'USER')) {
			return true;
		}

		return false;
	}

}
