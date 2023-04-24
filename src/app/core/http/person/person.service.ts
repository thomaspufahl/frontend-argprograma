import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Person } from '@models/person.model';
import { Observable } from 'rxjs';

export class PersonDTO {
	id?: number;
	firstname!: String;
	lastname!: String;
	description!: String;

	constructor(firstname: String, lastname: String, description: String) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.description = description;
	}

	setFirstname(firstname: String) { this.firstname = firstname; }
	setLastname(lastname: String) { this.lastname = lastname; }
	setDescription(description: String) { this.description = description; }
	setId(id: number) { this.id = id; }

	getId() { return this.id; }
	getFirstname() { return this.firstname; }
	getLastname() { return this.lastname; }
	getDescription() { return this.description; }
}


@Injectable({
	providedIn: 'root'
})
export class PersonService {

	constructor(private readonly api: ApiService, private readonly http: HttpClient) { }

	URL: string = this.api.getApiUrl() + '/person';
	modifyURL: string = this.URL + '/person/modify';
	userURL: string = this.URL + '/user';

	public getList(): Observable<Person[]> {
		return this.http.get<Person[]>(this.URL);
	}

	public getOneById(person_id: number): Observable<Person> {
		return this.http.get<Person>(this.URL + `/${person_id}`)
	}

	public add(person: Person): Observable<any> {
		return this.http.post<any>(this.modifyURL + '/add', person)
	}

	public removeAll(): Observable<any> {
		return this.http.delete<any>(this.modifyURL + '/remove')
	}

	public removeOneById(person_id: number): Observable<any> {
		return this.http.delete<any>(this.modifyURL + `/${person_id}`)
	}

	public update(person_id: number, person: Person): Observable<Person> {
		return this.http.put<Person>(this.modifyURL + `/${person_id}`, person)
	}

	public getOneByUserEmail(email: string): Observable<Person> {
		return this.http.get<Person>(this.userURL + `/${email}`)
	}

	public editPersonByUserEmail(email: string, person: Person): Observable<Person> {
		return this.http.patch<Person>(this.userURL + `/${email}`, person)
	}
}