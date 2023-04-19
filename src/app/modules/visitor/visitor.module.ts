import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { VisitorComponent } from './page/visitor/visitor.component';

import { CoreModule } from '@app/core/core.module';


@NgModule({
	declarations: [
		VisitorComponent
	],
	imports: [
		CommonModule,
		VisitorRoutingModule,
		CoreModule
	]
})
export class VisitorModule { }
