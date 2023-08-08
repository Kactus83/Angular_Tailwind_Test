import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuzeDrawerComponent } from './drawer.component';

@NgModule({
    declarations: [
        RuzeDrawerComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        RuzeDrawerComponent
    ]
})
export class RuzeDrawerModule
{
}
