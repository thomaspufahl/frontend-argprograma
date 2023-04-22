import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@core/core.module';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './page/user/user.component';



@NgModule({
	declarations: [
		UserComponent
	],
	imports: [
		CommonModule,
		UserRoutingModule,
		CoreModule,
	]
})
export class UserModule { }
