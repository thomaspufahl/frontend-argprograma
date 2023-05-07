import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Person } from '@app/core/models/person.model';
import { Observable } from 'rxjs';
import { Project } from '@app/core/models/project.model';

@Injectable({
	providedIn: 'root'
})
export class ProjectService {

	constructor(
		private readonly api: ApiService,
		private readonly http: HttpClient,
	) { }

	URL: string = this.api.getApiUrl() + '/project';
	modifyURL: string = this.URL + '/modify';
	personURL: string = this.URL + '/person';

	public getListByPerson(person: Person): Observable<Project[]> {
		return this.http.get<Project[]>(this.personURL + `/${person.id}`);
	}

	public create(project: Project): Observable<Project> {
		return this.http.post<Project>(this.modifyURL + `/add`, project);
	}

	public update(project_id: number, project: Project): Observable<Project> {
		return this.http.put<Project>(this.modifyURL + `/edit/${project_id}`, project);
	}

	public deleteById(project_id: number) {
		return this.http.delete(this.modifyURL + `/remove/${project_id}`);
	}

	public uploadImage(project_id: number, multipart: FormData): Observable<String> {
		return this.http.post<String>(this.modifyURL + `/upload/${project_id}`, multipart);
	}

}
