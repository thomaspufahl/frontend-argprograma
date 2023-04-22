import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Person } from '@models/person.model';

@Injectable({
	providedIn: 'root'
})
export class PersonService {

	constructor(private readonly api: ApiService, private readonly http: HttpClient) { }

	URL: string = this.api.getApiUrl() + '/person';
	modifyURL: string = this.URL + '/modify';

	getList() {
		return this.http.get(this.URL).subscribe();
	}

	getOneById(person_id: number) {
		return this.http.get(this.URL + `/${person_id}`).subscribe();
	}

	add(person: Person) {
		return this.http.post(this.modifyURL + '/add', person).subscribe();
	}

	removeAll() {
		return this.http.delete(this.modifyURL + '/remove').subscribe();
	}

	removeOneById(person_id: number) {
		return this.http.delete(this.modifyURL + `/${person_id}`).subscribe();
	}

	update(person_id: number, person: Person) {
		return this.http.put(this.modifyURL + `/${person_id}`, person).subscribe();
	}

}
