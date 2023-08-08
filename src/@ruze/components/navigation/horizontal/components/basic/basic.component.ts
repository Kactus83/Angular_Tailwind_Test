import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { RuzeHorizontalNavigationComponent } from '../../horizontal.component';
import { RuzeNavigationService } from '../../../navigation.service';
import { RuzeNavigationItem } from '../../../navigation.types';
import { RuzeUtilsService } from '../../../../../services/utils/utils.service';

@Component({
    selector       : 'ruze-horizontal-navigation-basic-item',
    templateUrl    : './basic.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RuzeHorizontalNavigationBasicItemComponent implements OnInit, OnDestroy
{
    @Input() item: RuzeNavigationItem;
    @Input() name: string;

    isActiveMatchOptions: IsActiveMatchOptions;
    private _ruzeHorizontalNavigationComponent: RuzeHorizontalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _ruzeNavigationService: RuzeNavigationService,
        private _ruzeUtilsService: RuzeUtilsService
    )
    {
        // Set the equivalent of {exact: false} as default for active match options.
        // We are not assigning the item.isActiveMatchOptions directly to the
        // [routerLinkActiveOptions] because if it's "undefined" initially, the router
        // will throw an error and stop working.
        this.isActiveMatchOptions = this._ruzeUtilsService.subsetMatchOptions;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Set the "isActiveMatchOptions" either from item's
        // "isActiveMatchOptions" or the equivalent form of
        // item's "exactMatch" option
        this.isActiveMatchOptions =
            this.item.isActiveMatchOptions ?? this.item.exactMatch
                ? this._ruzeUtilsService.exactMatchOptions
                : this._ruzeUtilsService.subsetMatchOptions;

        // Get the parent navigation component
        this._ruzeHorizontalNavigationComponent = this._ruzeNavigationService.getComponent(this.name);

        // Mark for check
        this._changeDetectorRef.markForCheck();

        // Subscribe to onRefreshed on the navigation component
        this._ruzeHorizontalNavigationComponent.onRefreshed.pipe(
            takeUntil(this._unsubscribeAll)
        ).subscribe(() => {

            // Mark for check
            this._changeDetectorRef.markForCheck();
        });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
