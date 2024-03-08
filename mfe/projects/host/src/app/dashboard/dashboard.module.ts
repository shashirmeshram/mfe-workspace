import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ModuleFederationToolsModule } from '@angular-architects/module-federation-tools';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, ModuleFederationToolsModule, RouterModule],
})
export class DashboardModule {}
