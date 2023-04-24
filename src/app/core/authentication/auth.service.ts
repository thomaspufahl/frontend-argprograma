import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@models/user.model';
import { Jwt } from '@models/jwt.model';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	authURL = 'http://localhost:8080/auth/';

	constructor(private http: HttpClient) { }

	public register(user: User): Observable<Jwt> {
		return this.http.post<Jwt>(this.authURL + 'register', {
			"email": user.email,
			"password": user.password
		});
	}

	public authenticate(user: User): Observable<Jwt> {
		return this.http.post<Jwt>(this.authURL + 'authenticate', {
			"email": user.email,
			"password": user.password
		});
	}

}