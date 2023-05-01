import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '@app/core/models/skill.model';
import { Person } from '@app/core/models/person.model';

@Injectable({
	providedIn: 'root'
})
export class SkillService {

	constructor(
		private readonly api: ApiService,
		private readonly http: HttpClient,
	) { }

	URL: string = this.api.getApiUrl() + '/skill';
	modifyURL: string = this.URL + '/modify';
	personURL: string = this.URL + '/person';

	public getListByPerson(person: Person): Observable<Skill[]> {
		return this.http.get<Skill[]>(this.personURL + `/${person.id}`);
	}

	public create(skill: Skill): Observable<Skill> {
		return this.http.post<Skill>(this.modifyURL + `/add`, skill);
	}

	public update(skill_id: number, skill: Skill): Observable<Skill> {
		return this.http.put<Skill>(this.modifyURL + `/edit/${skill_id}`, skill);
	}

	public deleteById(skill_id: number) {
		return this.http.delete(this.modifyURL + `/remove/${skill_id}`);
	}
}
