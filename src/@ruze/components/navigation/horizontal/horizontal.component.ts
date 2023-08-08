import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { ruzeAnimations } from '../../../animations';
import { RuzeNavigationItem } from '../navigation.types';
import { RuzeNavigationService } from '../navigation.service';
import { RuzeUtilsService } from '../../../services/utils/utils.service';

@Component({
    selector       : 'ruze-horizontal-navigation',
    templateUrl    : './horizontal.component.html',
    styleUrls      : ['./horizontal.component.scss'],
    animations     : ruzeAnimations,
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs       : 'ruzeHorizontalNavigation'
})
export class RuzeHorizontalNavigationComponent implements OnChanges, OnInit, OnDestroy
{
    @Input() name: string = this._ruzeUtilsService.randomId();
    @Input() navigation: RuzeNavigationItem[];

    onRefreshed: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
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
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On changes
     *
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges): void
    {
        // Navigation
        if ( 'navigation' in changes )
        {
            // Mark for check
            this._changeDetectorRef.markForCheck();
        }
    }

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Make sure the name input is not an empty string
        if ( this.name === '' )
        {
            this.name = this._ruzeUtilsService.randomId();
        }

        // Register the navigation component
        this._ruzeNavigationService.registerComponent(this.name, this);
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Deregister the navigation component from the registry
        this._ruzeNavigationService.deregisterComponent(this.name);

        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Refresh the component to apply the changes
     */
    refresh(): void
    {
        // Mark for check
        this._changeDetectorRef.markForCheck();

        // Execute the observable
        this.onRefreshed.next(true);
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }
}
