import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuzeCardComponent } from './card.component';

@NgModule({
    declarations: [
        RuzeCardComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        RuzeCardComponent
    ]
})
export class RuzeCardModule
{
}
