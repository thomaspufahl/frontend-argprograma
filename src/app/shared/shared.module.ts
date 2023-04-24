import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';



@NgModule({
	declarations: [
		LogoComponent,
		ProfileComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
	],
	exports: [
		LogoComponent,
		ProfileComponent,
	]
})
export class SharedModule { }
