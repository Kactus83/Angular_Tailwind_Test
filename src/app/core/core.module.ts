import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { IconsModule } from './icons/icons.module';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
    imports: [
        AuthModule,
        IconsModule,
        TranslocoModule
    ]
})
export class CoreModule
{
    /**
     * Constructor
     */
    constructor(
        @Optional() @SkipSelf() parentModule?: CoreModule
    )
    {
        // Do not allow multiple injections
        if ( parentModule )
        {
            throw new Error('CoreModule has already been loaded. Import this module in the AppModule only.');
        }
    }
}
