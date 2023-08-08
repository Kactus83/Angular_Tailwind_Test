import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuzeMasonryComponent } from './masonry.component';

@NgModule({
    declarations: [
        RuzeMasonryComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        RuzeMasonryComponent
    ]
})
export class RuzeMasonryModule
{
}
