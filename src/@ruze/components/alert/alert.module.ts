import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RuzeAlertComponent } from './alert.component';

@NgModule({
    declarations: [
        RuzeAlertComponent
    ],
    imports     : [
        CommonModule,
        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        RuzeAlertComponent
    ]
})
export class RuzeAlertModule
{
}
