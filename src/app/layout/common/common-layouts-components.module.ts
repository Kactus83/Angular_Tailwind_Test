import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from './footer/footer.module';
import { NavigationModule } from './navigation/navigation.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FooterModule,
    NavigationModule
  ],
  exports: [
    FooterModule,
    NavigationModule
  ]
})
export class CommonLayoutsComponentsModule { }
