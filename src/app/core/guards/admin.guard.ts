import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AdminGuard implements CanActivate {

	constructor(private readonly router: Router) { }

	canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

		if (this.hasAdmin()) {
			return true;
		}

		alert("You don't have permission to access this page! Please login as an admin.");
		this.router.navigate(['/']);
		return false;
	}

	hasAdmin(): boolean {
		return false;
	}

}
