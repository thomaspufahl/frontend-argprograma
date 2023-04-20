import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Person } from '@core/models/person.model';

@Injectable({
	providedIn: 'root'
})

export class PersonService {

	constructor(private readonly api: ApiService, private readonly http: HttpClient) { }

	public getPersons() {
		return this.http.get<Person[]>(this.api.getApiUrlUser());
	}

	public createPerson(person: Person) {
		return this.http.post(this.api.getApiUrlUser(), person).subscribe();
	}

}
