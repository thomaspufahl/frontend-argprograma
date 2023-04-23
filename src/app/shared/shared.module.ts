import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditButtonComponent } from './components/edit-button/edit-button.component';



@NgModule({
	declarations: [
		LogoComponent,
		ProfileComponent,
		EditButtonComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		LogoComponent,
		ProfileComponent,
		EditButtonComponent
	]
})
export class SharedModule { }
