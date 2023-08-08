import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { TestPageModule } from './modules/test-page/test-page.module';
import { HomeModule } from './modules/home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RuzeModule } from 'src/@ruze/ruze.module';
import { RuzeConfigModule } from 'src/@ruze/services/config';
import { appConfig } from './core/config/app.config';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    TestPageModule,
    HomeModule,
    BrowserAnimationsModule,
    CoreModule,
    // Fuse, FuseConfig & FuseMockAPI
    RuzeModule,
    RuzeConfigModule.forRoot(appConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
