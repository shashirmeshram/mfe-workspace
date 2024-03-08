import { NgModule, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialeModule } from '../material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { SharedLibModule } from 'shared-lib';
import { ModuleFederationToolsModule } from '@angular-architects/module-federation-tools';
import { DashboardModule } from './dashboard/dashboard.module';
@NgModule({
  declarations: [AppComponent, AdminComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialeModule,
    SharedLibModule,
    ModuleFederationToolsModule,
    DashboardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {
  // constructor(private ngZone: NgZone) {
  //   (window as any).ngZone = this.ngZone; 
  // }
}
