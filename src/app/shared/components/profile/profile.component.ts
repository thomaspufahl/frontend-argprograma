import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TokenService } from '@app/core/services/token/token.service';
import { PersonService } from '@core/http/person/person.service';
import { Person } from '@models/person.model'

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

	@Input() isLogged!: boolean;

	defaultPerson: Person = new Person('Firstname', 'Lastname', "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in molestie est, eget scelerisque velit. Integer tempus nisl quis lectus sagittis, non venenatis mi pharetra. Nullam ultricies ligula vitae tincidunt ultricies. Aenean eu mollis massa, quis ullamcorper ante. Nullam congue, nulla sit amet ultrices maximus, lorem lectus ullamcorper diam, nec finibus turpis odio a nisi. Maecenas egestas mauris id sem blandit porta a in dui. Sed eget eleifend magna. Nullam mattis nulla tincidunt dapibus faucibus. Donec aliquet augue lectus, sit amet mollis nibh pharetra ac. Integer eget bibendum nunc. Vestibulum sed urna non nisi placerat egestas vitae ut urna. Vestibulum. ", "https://picsum.photos/1920/1080", "https://picsum.photos/1920/1080");

	// VALUES TO SEND TO THE API
	person: Person = this.defaultPerson;

	constructor(
		private readonly personSvc: PersonService,
		private readonly tokenSvc: TokenService,
	) { }

	ngOnInit(): void {
		if (!this.tokenSvc.existsToken()) { return }
		if (this.tokenSvc.isExpired()) { return }

		this.personSvc.getOneByUserEmail(this.tokenSvc.getSubject()).subscribe((personData: Person) => {
			this.person.setId(personData.id);
			if (personData.firstname != null) { this.person.setFirstname(personData.firstname); }
			if (personData.lastname != null) { this.person.setLastname(personData.lastname); }
			if (personData.description != null) { this.person.setDescription(personData.description); }
			if (personData.banner != null) { this.person.setBanner(personData.banner); }
			if (personData.avatar != null) { this.person.setAvatar(personData.avatar); }
		});
	}

	onFakeUpdate(form: any): void {
		if (form.value.firstname != '') {
			this.person.firstname = form.value.firstname
		}
		if (form.value.lastname != '') {
			this.person.lastname = form.value.lastname
		}
		if (form.value.description != '') {
			this.person.description = form.value.description
		}
		if (form.value.banner != '') {
			this.person.banner = form.value.banner
		}
		if (form.value.avatar != '') {
			this.person.avatar = form.value.avatar
		}
		this.onUpdate()
	}

	onUpdate() {
		if (!this.tokenSvc.existsToken()) { return }
		if (this.tokenSvc.isExpired()) { return }

		const email = this.tokenSvc.getSubject();
		this.personSvc.editPersonByUserEmail(email, this.person).subscribe();
	}

	onImageUpdate(image: HTMLInputElement) {
		if (!this.tokenSvc.existsToken()) { return }
		if (this.tokenSvc.isExpired()) { return }

		const file: File = image.files![0];

		if (file == null) { return }
		if (file.size > 1000000) { return }

		const formData = new FormData();

		if (image.name == 'avatar') {
			formData.append('avatar', file);
			this.personSvc.uploadAvatar(this.person.id, formData).subscribe();
		} else {
			formData.append('banner', file);
			this.personSvc.uploadBanner(this.person.id, formData).subscribe();
		}
	}

}
