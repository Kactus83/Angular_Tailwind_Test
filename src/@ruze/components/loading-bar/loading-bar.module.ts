import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RuzeLoadingBarComponent } from './loading-bar.component';

@NgModule({
    declarations: [
        RuzeLoadingBarComponent
    ],
    imports     : [
        CommonModule,
        MatProgressBarModule
    ],
    exports     : [
        RuzeLoadingBarComponent
    ]
})
export class RuzeLoadingBarModule
{
}
