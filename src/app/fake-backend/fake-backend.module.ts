import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fakeBackendProvider } from './fake-backend.service';
@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    fakeBackendProvider
  ]
})
export class FakeBackendModule { }
