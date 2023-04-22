export class Employment {

	id?: number;
	name: String;
	description: String;

	constructor(name: String, description: String) {
		this.name = name;
		this.description = description;
	}

	setId(id: number) {
		this.id = id;
	}
	setName(name: String) {
		this.name = name;
	}
	setDescription(description: String) {
		this.description = description;
	}

	getId() {
		return this.id;
	}
	getName() {
		return this.name;
	}
	getDescription() {
		return this.description;
	}
}