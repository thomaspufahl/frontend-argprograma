export class Person {

	firstname!: String;
	lastname!: String;
	description!: String;

	constructor(firstname: String, lastname: String, description: String) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.description = description;
	}

	setFirstname(firstname: String) {
		this.firstname = firstname;
	}
	setLastname(lastname: String) {
		this.lastname = lastname;
	}
	setDescription(description: String) {
		this.description = description;
	}

	getFirstname() {
		return this.firstname;
	}
	getLastname() {
		return this.lastname;
	}
	getDescription() {
		return this.description;
	}
}