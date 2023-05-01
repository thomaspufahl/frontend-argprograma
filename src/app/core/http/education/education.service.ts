import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Education } from '@app/core/models/education.model';
import { Person } from '@app/core/models/person.model';

@Injectable({
	providedIn: 'root'
})
export class EducationService {

	constructor(
		private readonly api: ApiService,
		private readonly http: HttpClient,
	) { }

	URL: string = this.api.getApiUrl() + '/education';
	modifyURL: string = this.URL + '/modify';
	personURL: string = this.URL + '/person';

	public getListByPerson(person: Person): Observable<Education[]> {
		return this.http.get<Education[]>(this.personURL + `/${person.id}`);
	}

	public create(education: Education): Observable<Education> {
		return this.http.post<Education>(this.modifyURL + `/add`, education);
	}

	public update(education_id: number, education: Education): Observable<Education> {
		return this.http.put<Education>(this.modifyURL + `/edit/${education_id}`, education);
	}

	public deleteById(education_id: number) {
		return this.http.delete(this.modifyURL + `/remove/${education_id}`);
	}
}
