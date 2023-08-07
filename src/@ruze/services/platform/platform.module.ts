import { NgModule } from '@angular/core';
import { RuzePlatformService } from './platform.service';

@NgModule({
    providers: [
        RuzePlatformService
    ]
})
export class RuzePlatformModule
{
    /**
     * Constructor
     */
    constructor(private _ruzePlatformService: RuzePlatformService)
    {
    }
}
