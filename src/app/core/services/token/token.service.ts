import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

const TOKEN_KEY = 'access_token';
const FM: boolean = true;
const FG: boolean = true;
const A: boolean = true;
const B: boolean = true;

@Injectable({
	providedIn: 'root'
})
export class TokenService {

	roles: Array<string> = [];

	constructor(private readonly jwtHelper: JwtHelperService) { }

	existsToken(): boolean {
		return tokenGetter() ? true : false;
	}

	isExpired() {
		const isExpired = this.jwtHelper.isTokenExpired(tokenGetter());

		if (isExpired) {
			this.removeToken();
			return true;
		}

		return false;
	}

	public setToken(token: string): void {
		window.sessionStorage.removeItem(TOKEN_KEY);
		window.sessionStorage.setItem(TOKEN_KEY, token);
		window.sessionStorage.setItem('FM', FM.toString());
		window.sessionStorage.setItem('FG', FG.toString());
		window.sessionStorage.setItem('A', A.toString());
		window.sessionStorage.setItem('B', B.toString());
	}

	public removeToken(): void {
		window.sessionStorage.clear();
	}

	public getSubject(): string {
		return this.jwtHelper.decodeToken(tokenGetter()!).sub;
	}
}

export function tokenGetter() {
	return sessionStorage.getItem('access_token');
}