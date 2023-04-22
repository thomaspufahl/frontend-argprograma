export class User {

	email!: string;
	password!: string;
	authorities!: string[];

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

	getEmail(): string {
		return this.email;
	}

	getPassword(): string {
		return this.password;
	}

	getAuthorities(): string[] {
		return this.authorities;
	}
}