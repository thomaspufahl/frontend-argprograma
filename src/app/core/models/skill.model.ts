import { Person } from "./person.model";

export class Skill {
	id!: number;
	name!: string;
	percentage!: number;
	person?: Person;

	constructor(name: string, percentage: number, person: Person = new Person()) {
		this.name = name;
		this.percentage = percentage;
		this.setPerson(person);
	}

	setId(id: number) {
		this.id = id;
	}
	setName(name: string) {
		this.name = name;
	}
	setPercentage(percentage: number) {
		this.percentage = percentage;
	}
	setPerson(person: Person) {
		if (person.id > 0) { this.person = person; }
	}

	getId() {
		return this.id;
	}
	getName() {
		return this.name;
	}
	getPercentage() {
		return this.percentage;
	}
	getPerson() {
		return this.person;
	}
}