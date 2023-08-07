import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyLayoutComponent } from './empty-layout.component';
import { CommonLayoutsComponentsModule } from '../../common/common-layouts-components.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EmptyLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CommonLayoutsComponentsModule
  ],
  exports: [
    EmptyLayoutComponent
  ]
})
export class EmptyLayoutModule { }
