import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RuzeFullscreenComponent } from './fullscreen.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        RuzeFullscreenComponent
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        CommonModule
    ],
    exports     : [
        RuzeFullscreenComponent
    ]
})
export class RuzeFullscreenModule
{
}
