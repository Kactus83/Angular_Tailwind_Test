import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { FooterModule } from './common/footer/footer.module';
import { NavigationModule } from './common/navigation/navigation.module';
import { RouterModule } from '@angular/router'; 

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    NavigationModule,
    RouterModule 
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
