import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Person } from '@models/person.model';

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

	URL: string = this.api.getApiUrl() + '/user';
	personURL: string = this.URL + '/person';

	public getList(): Observable<User[]> {
		return this.http.get<User[]>(this.URL);
	}

	public removeAll(): Observable<any> {
		return this.http.delete<any>(this.URL);
	}
}
