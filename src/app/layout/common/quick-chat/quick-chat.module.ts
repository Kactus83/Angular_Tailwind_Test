import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RuzeDrawerModule } from '../../../../@ruze/components/drawer';
import { RuzeScrollbarModule } from '../../../../@ruze/directives/scrollbar';
import { SharedModule } from '../../../shared/shared.module';
import { QuickChatComponent } from '../../../layout/common/quick-chat/quick-chat.component';

@NgModule({
    declarations: [
        QuickChatComponent
    ],
    imports     : [
        RouterModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        RuzeDrawerModule,
        RuzeScrollbarModule,
        SharedModule
    ],
    exports     : [
        QuickChatComponent
    ]
})
export class QuickChatModule
{
}
