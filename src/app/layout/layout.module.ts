import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { EmptyLayoutModule } from './layouts/empty-layout/empty-layout.module';
import { DefaultLayoutModule } from './layouts/default-layout/default-layout.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    EmptyLayoutModule,
    DefaultLayoutModule,
    RouterModule
  ],
  exports: [
    LayoutComponent,
    EmptyLayoutModule,
    DefaultLayoutModule
  ]
})
export class LayoutModule { }
