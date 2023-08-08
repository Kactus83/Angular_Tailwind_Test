import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { RuzeVerticalNavigationComponent } from '../../vertical.component';
import { RuzeNavigationService } from '../../../navigation.service';
import { RuzeNavigationItem } from '../../../navigation.types';

@Component({
    selector       : 'ruze-vertical-navigation-spacer-item',
    templateUrl    : './spacer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RuzeVerticalNavigationSpacerItemComponent implements OnInit, OnDestroy
{
    @Input() item: RuzeNavigationItem;
    @Input() name: string;

    private _ruzeVerticalNavigationComponent: RuzeVerticalNavigationComponent;
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
        this._ruzeVerticalNavigationComponent = this._ruzeNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._ruzeVerticalNavigationComponent.onRefreshed.pipe(
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
