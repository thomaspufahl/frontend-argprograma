export class Person {
	id?: number;
	name: String;
	lastname: String;
	img: String;

	constructor(name: String = "name", lastname: String = "lastname", img: String = "img-default") {
		this.name = name;
		this.lastname = lastname;
		this.img = img;
	}
}