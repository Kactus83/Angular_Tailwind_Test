import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { RuzeHorizontalNavigationComponent } from '../../horizontal.component';
import { RuzeNavigationService } from '../../../navigation.service';
import { RuzeNavigationItem } from '../../../navigation.types';

@Component({
    selector       : 'ruze-horizontal-navigation-divider-item',
    templateUrl    : './divider.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RuzeHorizontalNavigationDividerItemComponent implements OnInit, OnDestroy
{
    @Input() item: RuzeNavigationItem;
    @Input() name: string;

    private _ruzeHorizontalNavigationComponent: RuzeHorizontalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _ruzeNavigationService: RuzeNavigationService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the parent navigation component
        this._ruzeHorizontalNavigationComponent = this._ruzeNavigationService.getComponent(this.name);

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
