import { Person } from "./person.model";

export class Project {
	id!: number;
	title!: string;
	description!: string;
	link!: string;
	finish!: string;
	person?: Person;

	constructor(
		title: string,
		description: string,
		link: string,
		finish: string,
		person: Person = new Person(),
	) {
		this.title = title;
		this.description = description;
		this.link = link;
		this.finish = finish;
		this.setPerson(person);
	}

	setId(id: number) {
		this.id = id;
	}
	setTitle(title: string) {
		this.title = title;
	}
	setDescription(description: string) {
		this.description = description;
	}
	setLink(link: string) {
		this.link = link;
	}
	setFinish(finish: string) {
		this.finish = finish;
	}
	setPerson(person: Person) {
		if (person.id > 0) { this.person = person; }
	}

	getId() {
		return this.id;
	}
	getTitle() {
		return this.title;
	}
	getDescription() {
		return this.description;
	}
	getLink() {
		return this.link;
	}
	getFinish() {
		return this.finish;
	}
	getPerson() {
		return this.person;
	}
}