import { Injectable } from '@angular/core';
import { RuzeMockApiService } from '../../../../@ruze/lib/mock-api/mock-api.service';
import { crypto as cryptoData } from '../../../mock-api/dashboards/crypto/data';
import { cloneDeep } from 'lodash-es';

@Injectable({providedIn: 'root'})
export class CryptoMockApi
{
    private _crypto: any = cryptoData;

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
        // @ Crypto - GET
        // -----------------------------------------------------------------------------------------------------
        this._ruzeMockApiService
            .onGet('api/dashboards/crypto')
            .reply(() => [200, cloneDeep(this._crypto)]);
    }
}
