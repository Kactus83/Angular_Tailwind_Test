import { Injectable } from '@angular/core';
import { RuzeMockApiService } from '../../../../@ruze/lib/mock-api/mock-api.service';
import { project as projectData } from '../../../mock-api/dashboards/project/data';
import { cloneDeep } from 'lodash-es';

@Injectable({providedIn: 'root'})
export class ProjectMockApi
{
    private _project: any = projectData;

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
        // @ Sales - GET
        // -----------------------------------------------------------------------------------------------------
        this._ruzeMockApiService
            .onGet('api/dashboards/project')
            .reply(() => [200, cloneDeep(this._project)]);
    }
}
