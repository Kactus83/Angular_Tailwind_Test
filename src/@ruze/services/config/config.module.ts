import { ModuleWithProviders, NgModule } from '@angular/core';
import { RuzeConfigService } from './config.service';
import { RUZE_APP_CONFIG } from './config.constants';

@NgModule()
export class RuzeConfigModule
{
    /**
     * Constructor
     */
    constructor(private _ruzeConfigService: RuzeConfigService)
    {
    }

    /**
     * forRoot method for setting user configuration
     *
     * @param config
     */
    static forRoot(config: any): ModuleWithProviders<RuzeConfigModule>
    {
        return {
            ngModule : RuzeConfigModule,
            providers: [
                {
                    provide : RUZE_APP_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
