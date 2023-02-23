import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

export interface User {
	_id?: number;
	username: String;
	password: String;
}

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(private readonly api: ApiService, private readonly http: HttpClient) { }

	public getUsers() {
		return this.http.get(this.api.getApiUrlUser()).subscribe();
	}

	public createUser(username: String, password: String) {
		let user: User = {
			username: username,
			password: password
		}
		return this.http.post(this.api.getApiUrlUser(), user).subscribe();
	}

	public deleteAllUsers() {
		return this.http.delete(this.api.getApiUrlUser()).subscribe();
	}
}
