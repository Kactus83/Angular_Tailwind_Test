import { NgModule } from '@angular/core';
import { RuzeScrollbarDirective } from './scrollbar.directive';

@NgModule({
    declarations: [
        RuzeScrollbarDirective
    ],
    exports     : [
        RuzeScrollbarDirective
    ]
})
export class RuzeScrollbarModule
{
}
