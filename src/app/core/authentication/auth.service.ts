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

	public register(user: User): Observable<any> {
		return this.http.post(this.authURL + 'register', user);
	}

	public authenticate(user: User): Observable<Jwt> {
		console.log("logeando")
		return this.http.post<Jwt>(this.authURL + 'authenticate', {
			"email": user.email,
			"password": user.password
		});
	}

}
