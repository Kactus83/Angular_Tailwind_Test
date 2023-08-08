import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RuzeLoadingInterceptor } from './loading.interceptor';

@NgModule({
    providers: [
        {
            provide : HTTP_INTERCEPTORS,
            useClass: RuzeLoadingInterceptor,
            multi   : true
        }
    ]
})
export class RuzeLoadingModule
{
}
