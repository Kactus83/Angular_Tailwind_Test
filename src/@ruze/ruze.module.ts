import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { RuzeMediaWatcherModule } from './services/media-watcher/media-watcher.module';
import { RuzePlatformModule } from './services/platform/platform.module';

@NgModule({
    imports  : [
        RuzeMediaWatcherModule,
        RuzePlatformModule
    ],
    providers: [
        {
            // Disable 'theme' sanity check
            provide : MATERIAL_SANITY_CHECKS,
            useValue: {
                doctype: true,
                theme  : false,
                version: true
            }
        },
        {
            // Use the 'fill' appearance on Angular Material form fields by default
            provide : MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'fill'
            }
        }
    ]
})
export class RuzeModule
{
    /**
     * Constructor
     */
    constructor(@Optional() @SkipSelf() parentModule?: RuzeModule)
    {
        if ( parentModule )
        {
            throw new Error('RuzeModule has already been loaded. Import this module in the AppModule only!');
        }
    }
}
