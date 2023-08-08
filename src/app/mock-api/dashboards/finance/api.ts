import { Injectable } from '@angular/core';
import { RuzeMockApiService } from '../../../../@ruze/lib/mock-api/mock-api.service';
import { finance as financeData } from '../../../mock-api/dashboards/finance/data';
import { cloneDeep } from 'lodash-es';

@Injectable({providedIn: 'root'})
export class FinanceMockApi
{
    private _finance: any = financeData;

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
            .onGet('api/dashboards/finance')
            .reply(() => [200, cloneDeep(this._finance)]);
    }
}
