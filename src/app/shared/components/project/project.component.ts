import { Component, Input, OnInit } from '@angular/core';
import { PersonService } from '@app/core/http/person/person.service';
import { ProjectService } from '@app/core/http/project/project.service';
import { Person } from '@app/core/models/person.model';
import { Project } from '@app/core/models/project.model';
import { TokenService } from '@app/core/services/token/token.service';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.sass']
})
export class ProjectComponent implements OnInit {

	@Input() isLogged!: boolean;

	defaultImg: string = "https://source.unsplash.com/XP9JF6jyRGc/400x400";
	defaultProject: Project = new Project("Title Project", "Project description", "Link", "YYYY-MM-DD");
	defaultPerson: Person = new Person();

	// VALUES TO SEND TO THE API
	projects: Project[] = [];
	person: Person = this.defaultPerson;

	constructor(
		private readonly projectSvc: ProjectService,
		private readonly personSvc: PersonService,
		private readonly tokenSvc: TokenService,
	) { }

	ngOnInit(): void {
		this.projects.push(this.defaultProject);

		if (!this.tokenSvc.existsToken()) { return }
		if (this.tokenSvc.isExpired()) { return }

		let email = this.tokenSvc.getSubject()
		this.personSvc.getOneByUserEmail(email).subscribe((personData: Person) => {
			this.person.setId(personData.id);
			if (personData.firstname != null) { this.person.setFirstname(personData.firstname); }
			if (personData.lastname != null) { this.person.setLastname(personData.lastname); }
			if (personData.description != null) { this.person.setDescription(personData.description); }

			this.projectSvc.getListByPerson(this.person).subscribe((projects: Project[]) => {
				this.projects = projects;
				if (email == 'user@user.com') {
					if (window.sessionStorage.getItem('FG') == 'true') {
						window.sessionStorage.setItem('FG', 'false');
						this.projects.find((project: Project) => project.id == 3)!.img = "./assets/images/google.png";
					}
					if (window.sessionStorage.getItem('FM') == 'true') {
						window.sessionStorage.setItem('FM', 'false');
						this.projects.find((project: Project) => project.id == 4)!.img = "./assets/images/meli.png";
					}
				}
			});
		});
	}

	addProject(form: any): void {
		if (!this.tokenSvc.existsToken()) { return }
		if (this.tokenSvc.isExpired()) { return }

		this.projects.push(new Project(form.value.title, form.value.description, form.value.link, form.value.finish));
		let email = this.tokenSvc.getSubject();
		if (email == null) { return }

		this.personSvc.getOneByUserEmail(email).subscribe((personData: any) => {
			this.projectSvc.create(new Project(form.value.title, form.value.description, form.value.link, form.value.finish, new Person('', '', '', '', '', personData.id))).subscribe();
			this.ngOnInit();
		});
	}

	deleteThisProject(project_id: number): void {
		if (!this.tokenSvc.existsToken()) { return }
		if (this.tokenSvc.isExpired()) { return }

		confirm("Are you sure you want to delete this education?") ? this.projectSvc.deleteById(project_id).subscribe() : null;
		this.ngOnInit();
	}

	onFakeProjectUpdate(form: any, image: HTMLInputElement): void {
		if (form.value.title != '') { this.projects.find((project: Project) => project.id == form.value.id)!.title = form.value.title; }
		if (form.value.description != '') { this.projects.find((project: Project) => project.id == form.value.id)!.description = form.value.description; }
		if (form.value.link != '') { this.projects.find((project: Project) => project.id == form.value.id)!.link = form.value.link; }
		if (form.value.finish != '') { this.projects.find((project: Project) => project.id == form.value.id)!.finish = form.value.finish; }

		this.onProjectUpdate(form.value.id, new Project(form.value.title, form.value.description, form.value.link, form.value.finish));
	}

	onProjectUpdate(project_id: number, project: Project): void {
		if (!this.tokenSvc.existsToken()) { return }
		if (this.tokenSvc.isExpired()) { return }

		this.projectSvc.update(project_id, project).subscribe(
			() => {
				this.ngOnInit();
			}
		);
	}

	onImageUpdate(form: any, image: HTMLInputElement) {

		if (!this.tokenSvc.existsToken()) { return }
		if (this.tokenSvc.isExpired()) { return }

		const file: File = image.files![0];

		if (file == null) { return }
		if (file.size > 10000000) {
			alert("Ingresa una imagen de menor tamaño")
			return
		}

		const formData = new FormData();

		formData.append('image', file);
		this.projectSvc.uploadImage(form.value.id, formData).subscribe(
			() => {
				this.ngOnInit();
			}
		);
	}
}
