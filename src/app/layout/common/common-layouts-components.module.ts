import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagesModule } from './languages/languages.module';
import { MessagesModule } from './messages/messages.module';
import { NotificationsModule } from './notifications/notifications.module';
import { QuickChatModule } from './quick-chat/quick-chat.module';
import { SearchModule } from './search/search.module';
import { SettingsModule } from './settings/settings.module';
import { ShortcutsModule } from './shortcuts/shortcuts.module';
import { UserModule } from './user/user.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LanguagesModule,
    MessagesModule,
    NotificationsModule,
    QuickChatModule,
    SearchModule,
    SettingsModule,
    ShortcutsModule,
    UserModule
  ],
  exports: [
    LanguagesModule,
    MessagesModule,
    NotificationsModule,
    QuickChatModule,
    SearchModule,
    SettingsModule,
    ShortcutsModule,
    UserModule
  ]
})
export class CommonLayoutsComponentsModule { }
