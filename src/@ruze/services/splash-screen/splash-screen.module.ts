import { NgModule } from '@angular/core';
import { RuzeSplashScreenService } from './splash-screen.service';

@NgModule({
    providers: [
        RuzeSplashScreenService
    ]
})
export class RuzeSplashScreenModule
{
    /**
     * Constructor
     */
    constructor(private _ruzeSplashScreenService: RuzeSplashScreenService)
    {
    }
}
