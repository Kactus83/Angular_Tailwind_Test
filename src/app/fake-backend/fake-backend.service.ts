import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';
import Base64 from 'crypto-js/enc-base64';
import HmacSHA256 from 'crypto-js/hmac-sha256';
import Utf8 from 'crypto-js/enc-utf8';

@Injectable()
export class FakeBackendService implements HttpInterceptor {
    private readonly _secret: any;

    constructor() {
        this._secret = 'YOUR_VERY_CONFIDENTIAL_SECRET_FOR_SIGNING_JWT_TOKENS!!!';
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return mergeMap(() => this.handleRoute(request, next))(of(null))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());
    }

    private handleRoute(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        switch (true) {
            case req.url.endsWith('api/auth/sign-in') && req.method === 'POST':
                return this.authenticate(req);
            default:
                return next.handle(req);
        }
    }

    private authenticate(req: HttpRequest<any>): Observable<HttpResponse<any>> {
        const { email, password } = req.body;
        if (email === 'test.account@ruze.com' && password === 'password') {
            return this.ok({
                user       : { id: 1, username: 'test', email: 'test.account@ruze.com' },
                accessToken: this.generateJWTToken(),
                tokenType  : 'bearer'
            });
        } else {
            return this.error('Username or password is incorrect');
        }
    }

    private ok(body?): Observable<HttpResponse<any>> {
        return of(new HttpResponse({ status: 200, body }));
    }

    private error(message): Observable<never> {
        return throwError({ error: { message } });
    }

    private generateJWTToken(): string {
        const header = {
            alg: 'HS256',
            typ: 'JWT'
        };

        const date = new Date();
        const iat = Math.floor(date.getTime() / 1000);
        const exp = Math.floor((date.setDate(date.getDate() + 7)) / 1000);

        const payload = {
            iat: iat,
            iss: 'Fuse',
            exp: exp
        };

        const stringifiedHeader = Utf8.parse(JSON.stringify(header));
        const encodedHeader = this.base64url(stringifiedHeader);

        const stringifiedPayload = Utf8.parse(JSON.stringify(payload));
        const encodedPayload = this.base64url(stringifiedPayload);

        let signature: any = encodedHeader + '.' + encodedPayload;
        signature = HmacSHA256(signature, this._secret);
        signature = this.base64url(signature);

        return encodedHeader + '.' + encodedPayload + '.' + signature;
    }

    private base64url(source: any): string {
        let encodedSource = Base64.stringify(source);
        encodedSource = encodedSource.replace(/=+$/, '');
        encodedSource = encodedSource.replace(/\+/g, '-');
        encodedSource = encodedSource.replace(/\//g, '_');
        return encodedSource;
    }
}

export const fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendService,
    multi: true
};
