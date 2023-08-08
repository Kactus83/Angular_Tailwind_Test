import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RuzeConfirmationService } from './confirmation.service';
import { RuzeConfirmationDialogComponent } from './dialog/dialog.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        RuzeConfirmationDialogComponent
    ],
    imports     : [
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        CommonModule
    ],
    providers   : [
        RuzeConfirmationService
    ]
})
export class RuzeConfirmationModule
{
    /**
     * Constructor
     */
    constructor(private _ruzeConfirmationService: RuzeConfirmationService)
    {
    }
}
