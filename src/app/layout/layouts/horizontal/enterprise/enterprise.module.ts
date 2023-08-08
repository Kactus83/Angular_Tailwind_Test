import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RuzeFullscreenModule } from '../../../../../@ruze/components/fullscreen';
import { RuzeLoadingBarModule } from '../../../../../@ruze/components/loading-bar';
import { RuzeNavigationModule } from '../../../../../@ruze/components/navigation';
import { LanguagesModule } from '../../../../layout/common/languages/languages.module';
import { MessagesModule } from '../../../../layout/common/messages/messages.module';
import { NotificationsModule } from '../../../../layout/common/notifications/notifications.module';
import { QuickChatModule } from '../../../../layout/common/quick-chat/quick-chat.module';
import { SearchModule } from '../../../../layout/common/search/search.module';
import { ShortcutsModule } from '../../../../layout/common/shortcuts/shortcuts.module';
import { UserModule } from '../../../../layout/common/user/user.module';
import { SharedModule } from '../../../../shared/shared.module';
import { EnterpriseLayoutComponent } from '../../../../layout/layouts/horizontal/enterprise/enterprise.component';

@NgModule({
    declarations: [
        EnterpriseLayoutComponent
    ],
    imports     : [
        HttpClientModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        RuzeFullscreenModule,
        RuzeLoadingBarModule,
        RuzeNavigationModule,
        LanguagesModule,
        MessagesModule,
        NotificationsModule,
        QuickChatModule,
        SearchModule,
        ShortcutsModule,
        UserModule,
        SharedModule
    ],
    exports     : [
        EnterpriseLayoutComponent
    ]
})
export class EnterpriseLayoutModule
{
}
