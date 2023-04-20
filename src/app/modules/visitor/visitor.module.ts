import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { VisitorComponent } from './page/visitor/visitor.component';

import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
	declarations: [
		VisitorComponent,
		ProfileComponent,
	],
	imports: [
		CommonModule,
		VisitorRoutingModule,
	]
})
export class VisitorModule { }
