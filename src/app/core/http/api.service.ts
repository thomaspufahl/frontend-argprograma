import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor() { }

	public getApiUrlUser(): string {
		return 'http://localhost:8080/user';
	}
}
