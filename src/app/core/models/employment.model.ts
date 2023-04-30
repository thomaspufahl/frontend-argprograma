import { Person } from "./person.model";
import { Responsibility } from "./responsibility.model";

export class Employment {

	id!: number;
	position!: string;
	employeer!: string;
	start!: string;
	end!: string;
	responsibilities!: Responsibility[];
	person?: Person;

	constructor(
		position: string,
		employeer: string,
		start: string,
		end: string,
		person: Person = new Person(),
	) {
		this.position = position;
		this.employeer = employeer;
		this.start = start;
		this.end = end;
		this.person = person;
	}

	setId(id: number) {
		this.id = id;
	}
	setPosition(position: string) {
		this.position = position;
	}
	setEmployeer(employeer: string) {
		this.employeer = employeer;
	}
	setStart(start: string) {
		this.start = start;
	}
	setEnd(end: string) {
		this.end = end;
	}
	setResponsibilities(responsibilities: Responsibility[]) {
		this.responsibilities = [...responsibilities];
	}
	setPerson(person: Person) {
		if (person.id > 0) { this.person = person; }
	}


	getId() {
		return this.id;
	}
	getPosition() {
		return this.position;
	}
	getEmployeer() {
		return this.employeer;
	}
	getStart() {
		return this.start;
	}
	getEnd() {
		return this.end;
	}
	getResponsibilities() {
		return this.responsibilities;
	}
	getPerson() {
		return this.person;
	}
}