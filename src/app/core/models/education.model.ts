import { Person } from "./person.model";

export class Education {

	id!: number;
	degree!: string;
	school!: string;
	start!: string;
	end!: string;
	description!: string;
	person?: Person;

	constructor(
		degree: string,
		school: string,
		start: string,
		end: string,
		description: string,
		person: Person = new Person(),
	) {
		this.degree = degree;
		this.school = school;
		this.start = start;
		this.end = end;
		this.description = description;
		this.setPerson(person);
	}

	setId(id: number) {
		this.id = id;
	}
	setDegree(degree: string) {
		this.degree = degree;
	}
	setSchool(school: string) {
		this.school = school;
	}
	setStart(start: string) {
		this.start = start;
	}
	setEnd(end: string) {
		this.end = end;
	}
	setDescription(description: string) {
		this.description = description;
	}
	setPerson(person: Person) {
		if (person.id > 0) { this.person = person; }
	}


	getId() {
		return this.id;
	}
	getDegree() {
		return this.degree;
	}
	getSchool() {
		return this.school;
	}
	getStart() {
		return this.start;
	}
	getEnd() {
		return this.end;
	}
	getDescription() {
		return this.description;
	}
	getPerson() {
		return this.person;
	}

}