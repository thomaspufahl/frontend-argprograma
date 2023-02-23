import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/footer/footer.component';

import { LocationStrategy, PathLocationStrategy } from '@angular/common';


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		MainComponent,
		FooterComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [
		{
			provide: LocationStrategy,
			useClass: PathLocationStrategy
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
