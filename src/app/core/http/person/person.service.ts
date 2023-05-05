import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Person } from '@models/person.model';
import { Observable } from 'rxjs';
import { TokenService, tokenGetter } from '@app/core/services/token/token.service';

@Injectable({
	providedIn: 'root'
})
export class PersonService {

	constructor(
		private readonly api: ApiService,
		private readonly http: HttpClient,
		private readonly tokenSvc: TokenService
	) { }

	URL: string = this.api.getApiUrl() + '/person';
	modifyURL: string = this.URL + '/modify'; // OJO AL CAMBIO Q HICE ACA, antes era /person/modify
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

	public uploadBanner(person_id: number, multipart: FormData): Observable<String> {
		return this.http.post<String>(this.modifyURL + `/upload/banner/${person_id}`, multipart)
	}
	public uploadAvatar(person_id: number, multipart: FormData): Observable<String> {
		return this.http.post<String>(this.modifyURL + `/upload/avatar/${person_id}`, multipart)
	}
}