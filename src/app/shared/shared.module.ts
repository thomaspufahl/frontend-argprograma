import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { EmploymentComponent } from './components/employment/employment.component';
import { EducationComponent } from './components/education/education/education.component';



@NgModule({
	declarations: [
		LogoComponent,
		ProfileComponent,
		EmploymentComponent,
		EducationComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
	],
	exports: [
		LogoComponent,
		ProfileComponent,
		EmploymentComponent,
		EducationComponent,
	]
})
export class SharedModule { }
