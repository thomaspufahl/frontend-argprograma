import { Component, OnInit } from '@angular/core';
import { UserService, User } from '@core/http/user/user.service';
@Component({
	selector: 'app-visitor',
	templateUrl: './visitor.component.html',
	styleUrls: ['./visitor.component.sass']
})
export class VisitorComponent implements OnInit {

	users: User[] = [];

	constructor(private readonly userService: UserService) { }

	ngOnInit(): void {
		this.getUsers();
		console.log(this.users);
	}

	public getUsers() {
		this.userService.getUsers().subscribe((users: any) => {
			this.users = [...users];
		});
	}

	public createUser(username: String, password: String) {
		this.userService.createUser(username, password);
	}

	public deleteAllUsers() {
		this.userService.deleteAllUsers();
	}

}
