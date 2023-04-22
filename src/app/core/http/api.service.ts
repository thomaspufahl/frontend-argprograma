import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor() { }

	public getApiUrl(): string {
		return 'http://localhost:8080';
	}
}
