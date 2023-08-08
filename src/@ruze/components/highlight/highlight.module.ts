import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuzeHighlightComponent } from './highlight.component';

@NgModule({
    declarations: [
        RuzeHighlightComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        RuzeHighlightComponent
    ]
})
export class RuzeHighlightModule
{
}
