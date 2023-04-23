import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from '@core/core.module';
import { SharedModule } from './shared/shared.module';

import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/footer/footer.component';

import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpTokenInterceptorProvider } from '@core/interceptors/http-token/http-token.interceptor';
import { JwtModule } from '@auth0/angular-jwt';
import { tokenGetter } from '@core/services/token/token.service';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		MainComponent,
		FooterComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CoreModule,
		SharedModule,
		JwtModule.forRoot({
			config: {
				tokenGetter: tokenGetter,
				allowedDomains: ['localhost:4200'],
			}
		})
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
