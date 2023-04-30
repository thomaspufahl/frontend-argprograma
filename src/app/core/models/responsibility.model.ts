export class Responsibility {
	id!: number;
	description!: String;

	constructor(description: String = '', id: number = 0) {
		this.setId(id);
		this.description = description;
	}

	setId(id: number) {
		if (id > 0) {
			this.id = id;
		}
	}
	setDescription(description: String) {
		this.description = description;
	}

	getId() {
		return this.id;
	}
	getDescription() {
		return this.description;
	}
}