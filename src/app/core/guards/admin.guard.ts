import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AdminGuard implements CanActivate {
	canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

		if (this.hasAdmin()) {
			return true;
		}

		alert("You don't have permission to access this page! Please login as an admin.");

		return false;
	}

	hasAdmin(): boolean {
		return false;
	}

}
