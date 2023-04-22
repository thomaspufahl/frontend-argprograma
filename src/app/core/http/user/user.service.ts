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
		return this.http.get(this.api.getApiUrl() + '/user');
	}

	public deleteAllUsers() {
		return this.http.delete(this.api.getApiUrl() + '/user');
	}
}
