import { NgModule } from '@angular/core';
import { RuzeUtilsService } from './utils.service';

@NgModule({
    providers: [
        RuzeUtilsService
    ]
})
export class RuzeUtilsModule
{
    /**
     * Constructor
     */
    constructor(private _ruzeUtilsService: RuzeUtilsService)
    {
    }
}
