import { NgModule } from '@angular/core';
import { RuzeScrollResetDirective } from './scroll-reset.directive';

@NgModule({
    declarations: [
        RuzeScrollResetDirective
    ],
    exports     : [
        RuzeScrollResetDirective
    ]
})
export class RuzeScrollResetModule
{
}
