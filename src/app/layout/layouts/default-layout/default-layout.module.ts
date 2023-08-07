import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonLayoutsComponentsModule } from '../../common/common-layouts-components.module';
import { DefaultLayoutComponent } from './default-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DefaultLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CommonLayoutsComponentsModule
  ],
  exports: [
    DefaultLayoutComponent
  ]
})
export class DefaultLayoutModule { }
