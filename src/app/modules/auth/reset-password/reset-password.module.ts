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
import { AuthResetPasswordComponent } from './reset-password.component';
import { authResetPasswordRoutes } from './reset-password.routing';

@NgModule({
    declarations: [
        AuthResetPasswordComponent
    ],
    imports     : [
        RouterModule.forChild(authResetPasswordRoutes),
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
export class AuthResetPasswordModule
{
}
