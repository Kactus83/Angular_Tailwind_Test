import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { RuzeCardModule } from '../../../../@ruze/components/card';
import { SharedModule } from '../../../shared/shared.module';
import { AuthConfirmationRequiredComponent } from './confirmation-required.component';
import { authConfirmationRequiredRoutes } from './confirmation-required.routing';

@NgModule({
    declarations: [
        AuthConfirmationRequiredComponent
    ],
    imports     : [
        RouterModule.forChild(authConfirmationRequiredRoutes),
        MatButtonModule,
        RuzeCardModule,
        SharedModule
    ]
})
export class AuthConfirmationRequiredModule
{
}
