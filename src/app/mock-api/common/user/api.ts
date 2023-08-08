import { Injectable } from '@angular/core';
import { RuzeMockApiService } from '../../../../@ruze/lib/mock-api/mock-api.service';
import { user as userData } from '../../../mock-api/common/user/data';
import { assign, cloneDeep } from 'lodash-es';

@Injectable({providedIn: 'root'})
export class UserMockApi
{
    private _user: any = userData;

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
        // @ User - GET
        // -----------------------------------------------------------------------------------------------------
        this._ruzeMockApiService
            .onGet('api/common/user')
            .reply(() => [200, cloneDeep(this._user)]);

        // -----------------------------------------------------------------------------------------------------
        // @ User - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._ruzeMockApiService
            .onPatch('api/common/user')
            .reply(({request}) =>
            {
                // Get the user mock-api
                const user = cloneDeep(request.body.user);

                // Update the user mock-api
                this._user = assign({}, this._user, user);

                // Return the response
                return [200, cloneDeep(this._user)];
            });
    }
}
