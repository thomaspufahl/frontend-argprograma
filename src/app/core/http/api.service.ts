import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor() { }

	public getApiUrl(): string {
		return 'https://api-argprograma-428s.onrender.com';
	}
}
