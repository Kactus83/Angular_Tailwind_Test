import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FakeBackendService implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith('api/auth/sign-in') && method === 'POST':
          return authenticate();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // route functions

    function authenticate() {
      const { email, password } = body;
      if (email === 'test.account@ruze.com' && password === 'password') {
        const token = createFakeJWT({
            id: 1,
            username: 'test',
            email: 'test.account@ruze.com',
            exp: Math.floor(Date.now() / 1000) + (60 * 60) // Expiration à 1 heure
        });
        return ok({
            id: 1,
            username: 'test',
            email: 'test.account@ruze.com',
            token: token
        });
      } else {
        return error('Username or password is incorrect');
      }
    }

    // JWT generation function
    function createFakeJWT(payload: object): string {
        const header = { alg: "none", typ: "JWT" };
        const base64UrlEncode = (src: object) => btoa(JSON.stringify(src)).replace('+', '-').replace('/', '_').replace(/=+$/, '');
        return [
            base64UrlEncode(header),
            base64UrlEncode(payload),
            ""
        ].join('.');
    }

    // helper functions

    function ok(body?) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function error(message) {
      return throwError({ error: { message } });
    }
  }
}

export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendService,
  multi: true
};
