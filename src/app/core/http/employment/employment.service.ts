import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employment } from '@app/core/models/employment.model';
import { Person } from '@app/core/models/person.model';
import { Responsibility } from '@app/core/models/responsibility.model';

@Injectable({
	providedIn: 'root'
})
export class EmploymentService {

	constructor(
		private readonly api: ApiService,

		private readonly http: HttpClient,
	) { }



	URL: string = this.api.getApiUrl() + '/employment';
	responsibilityURL: string = this.api.getApiUrl() + '/responsibility';
	modifyURL: string = this.URL + '/modify';
	personURL: string = this.URL + '/person';

	/// EMPLOYMENT (PARENT)

	public getListByPerson(person: Person): Observable<Employment[]> {
		return this.http.get<Employment[]>(this.personURL + `/${person.id}`);
	}

	public create(employment: Employment): Observable<Employment> {
		return this.http.post<Employment>(this.modifyURL + `/add`, employment);
	}

	public update(employment_id: number, employment: Employment): Observable<Employment> {
		return this.http.put<Employment>(this.modifyURL + `/edit/${employment_id}`, employment);
	}

	public deleteById(employment_id: number) {
		return this.http.delete(this.modifyURL + `/remove/${employment_id}`);
	}

	/// RESPONSIBILITY (CHILD)

	public getListResponsibilitiesByEmployment(employment: Employment): Observable<Responsibility[]> {
		return this.http.get<Responsibility[]>(this.responsibilityURL + `/employment/${employment.id}`);
	}

	public createResponsibility(responsibility: Responsibility, employment_id: number): Observable<Responsibility> {
		return this.http.post<Responsibility>(this.responsibilityURL + `/modify/add/${employment_id}`, responsibility);
	}

	public updateResponsibility(responsibility_id: number, responsibility: Responsibility): Observable<Responsibility> {
		return this.http.put<Responsibility>(this.responsibilityURL + `/modify/edit/${responsibility_id}`, responsibility);
	}

	public deleteResponsibilityById(responsibility_id: number) {
		return this.http.delete(this.responsibilityURL + `/modify/remove/${responsibility_id}`);
	}

}
