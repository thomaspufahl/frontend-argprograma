import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from '@core/core.module';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/footer/footer.component';

import { LogoComponent } from '@shared/components/logo/logo.component';

import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpTokenInterceptorProvider } from '@core/interceptors/http-token.interceptor';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		MainComponent,
		FooterComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CoreModule,
		LogoComponent
	],
	providers: [
		{
			provide: LocationStrategy,
			useClass: PathLocationStrategy
		},
		HttpTokenInterceptorProvider
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
