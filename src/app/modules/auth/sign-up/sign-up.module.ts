import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RuzeCardModule } from '../../../../@ruze/components/card';
import { RuzeAlertModule } from '../../../../@ruze/components/alert';
import { SharedModule } from '../../../shared/shared.module';
import { AuthSignUpComponent } from './sign-up.component';
import { authSignupRoutes } from './sign-up.routing';

@NgModule({
    declarations: [
        AuthSignUpComponent
    ],
    imports     : [
        RouterModule.forChild(authSignupRoutes),
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        RuzeCardModule,
        RuzeAlertModule,
        SharedModule
    ]
})
export class AuthSignUpModule
{
}
