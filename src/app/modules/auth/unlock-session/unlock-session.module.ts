import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RuzeCardModule } from '../../../../@ruze/components/card';
import { RuzeAlertModule } from '../../../../@ruze/components/alert';
import { SharedModule } from '../../../shared/shared.module';
import { AuthUnlockSessionComponent } from './unlock-session.component';
import { authUnlockSessionRoutes } from './unlock-session.routing';

@NgModule({
    declarations: [
        AuthUnlockSessionComponent
    ],
    imports     : [
        RouterModule.forChild(authUnlockSessionRoutes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        RuzeCardModule,
        RuzeAlertModule,
        SharedModule
    ]
})
export class AuthUnlockSessionModule
{
}
