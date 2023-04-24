import { Person } from "./person.model";

export class User {
	// OJO AL CAMBIO QUE HICE ACA, si falla algo puede ser por el cambio de ! a ?
	email!: string;
	password!: string;
	authorities?: string[];
	person?: Person;

	constructor(email: string, password: string) {
		this.email = email;
		this.password = password;
	}

	setEmail(email: string): void {
		this.email = email;
	}

	setPassword(password: string): void {
		this.password = password;
	}

	setAuthorities(authorities: string[]): void {
		this.authorities = authorities;
	}

	setPerson(person: Person): void {
		this.person = person;
	}

	getEmail(): string {
		return this.email;
	}

	getPassword(): string {
		return this.password;
	}

	getAuthorities(): string[] {
		return this.authorities!;
	}

	getPerson(): Person {
		return this.person!;
	}
}