import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

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
		SharedModule
	]
})
export class UserModule { }
