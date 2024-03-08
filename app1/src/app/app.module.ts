import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedLibModule } from 'shared-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, AppRoutingModule, SharedLibModule],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
