import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { EmploymentComponent } from './components/employment/employment.component';
import { EducationComponent } from './components/education/education/education.component';
import { SkillComponent } from './components/skill/skill.component';



@NgModule({
	declarations: [
		LogoComponent,
		ProfileComponent,
		EmploymentComponent,
		EducationComponent,
		SkillComponent,
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
		SkillComponent,
	]
})
export class SharedModule { }
