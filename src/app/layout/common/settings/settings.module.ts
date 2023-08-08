import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RuzeDrawerModule } from '../../../../@ruze/components/drawer';
import { SettingsComponent } from '../../../layout/common/settings/settings.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        SettingsComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        MatIconModule,
        MatTooltipModule,
        RuzeDrawerModule,
        MatButtonModule
    ],
    exports     : [
        SettingsComponent
    ]
})
export class SettingsModule
{
}
