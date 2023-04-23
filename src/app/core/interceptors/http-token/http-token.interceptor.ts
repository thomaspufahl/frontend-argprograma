import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService, tokenGetter } from '../../services/token/token.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

	constructor(private readonly tokenSvc: TokenService) { }

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		let tokenRequest = request;
		const token = tokenGetter();

		if (!this.tokenSvc.existsToken()) {
			return next.handle(tokenRequest);
		}

		if (this.tokenSvc.isExpired()) {
			return next.handle(tokenRequest)
		}

		tokenRequest = request.clone({
			setHeaders: {
				Authorization: `Bearer ${token}`
			}
		});

		return next.handle(tokenRequest);
	}
}

export const HttpTokenInterceptorProvider = {
	provide: HTTP_INTERCEPTORS,
	useClass: HttpTokenInterceptor,
	multi: true
}
