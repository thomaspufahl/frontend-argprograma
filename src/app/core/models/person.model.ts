export class Person {

	id!: number;
	firstname!: String;
	lastname!: String;
	avatar!: String;
	banner!: String;
	description!: String;

	constructor(
		firstname: String = '',
		lastname: String = '',
		description: String = '',
		avatar: String = '',
		banner: String = '',
		id: number = 0
	) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.description = description;
		this.avatar = avatar;
		this.banner = banner;
		this.id = id;
	}

	setId(id: number) {
		if (id > 0) { this.id = id; }
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
	setAvatar(avatar: String) {
		this.avatar = avatar;
	}
	setBanner(banner: String) {
		this.banner = banner;
	}


	getId() {
		return this.id;
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
	getAvatar() {
		return this.avatar;
	}
	getBanner() {
		return this.banner;
	}

}