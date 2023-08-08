import { Injectable } from '@angular/core';
import { RuzeMockApiService } from '../../../../@ruze/lib/mock-api/mock-api.service';
import { activities as activitiesData } from '../../../mock-api/pages/activities/data';
import { cloneDeep } from 'lodash-es';

@Injectable({providedIn: 'root'})
export class ActivitiesMockApi
{
    private _activities: any = activitiesData;

    /**
     * Constructor
     */
    constructor(private _ruzeMockApiService: RuzeMockApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Activities - GET
        // -----------------------------------------------------------------------------------------------------
        this._ruzeMockApiService
            .onGet('api/pages/activities')
            .reply(() => [200, cloneDeep(this._activities)]);
    }
}
