import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { EmploymentComponent } from './components/employment/employment.component';



@NgModule({
	declarations: [
		LogoComponent,
		ProfileComponent,
		EmploymentComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
	],
	exports: [
		LogoComponent,
		ProfileComponent,
		EmploymentComponent,
	]
})
export class SharedModule { }
