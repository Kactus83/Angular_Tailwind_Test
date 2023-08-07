import { NgModule } from '@angular/core';
import { RuzeMediaWatcherService } from './media-watcher.service';

@NgModule({
    providers: [
        RuzeMediaWatcherService
    ]
})
export class RuzeMediaWatcherModule
{
    /**
     * Constructor
     */
    constructor(private _ruzeMediaWatcherService: RuzeMediaWatcherService)
    {
    }
}
