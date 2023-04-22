import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@core/core.module';

import { VisitorRoutingModule } from './visitor-routing.module';
import { VisitorComponent } from './page/visitor/visitor.component';


import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './page/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './page/register/register.component';


@NgModule({
	declarations: [
		VisitorComponent,
		ProfileComponent,
		LoginComponent,
		LoginFormComponent,
		RegisterFormComponent,
		RegisterComponent,
	],
	imports: [
		CommonModule,
		VisitorRoutingModule,
		FormsModule,
		CoreModule,
	]
})
export class VisitorModule { }
