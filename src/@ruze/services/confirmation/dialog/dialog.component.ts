import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RuzeConfirmationConfig } from '../confirmation.types';

@Component({
    selector     : 'ruze-confirmation-dialog',
    templateUrl  : './dialog.component.html',
    styles       : [
        `
            .ruze-confirmation-dialog-panel {

                @screen md {
                    @apply w-128;
                }

                .mat-mdc-dialog-container {

                    .mat-mdc-dialog-surface {
                        padding: 0 !important;
                    }
                }
            }
        `
    ],
    encapsulation: ViewEncapsulation.None
})
export class RuzeConfirmationDialogComponent
{
    /**
     * Constructor
     */
    constructor(@Inject(MAT_DIALOG_DATA) public data: RuzeConfirmationConfig)
    {
    }

}
