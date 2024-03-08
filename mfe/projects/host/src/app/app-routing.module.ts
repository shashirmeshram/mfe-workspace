import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { DashboardComponent } from './dashboard/dashboard.component';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
  startsWith,
} from '@angular-architects/module-federation-tools';
const MFE_APP1_URL = 'http://localhost:5001/remoteEntry.js';
const MFE_APP2_URL = 'http://localhost:5002/remoteEntry.js';
const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  // {
  //   path: 'app1',
  //   loadChildren: () =>
  //     import('app1/homeModule').then((module) => module.HomeModule),
  // },
  // {
  //   path: 'app2',
  //   loadChildren: () =>
  //     import('app2/homeModule').then((module) => module.HomeModule),
  // },

  {
    path: 'app1',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: MFE_APP1_URL,
        exposedModule: './homeModule',
      }).then((m) => m.HomeModule),
  },

  {
    path: 'app2',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: MFE_APP2_URL,
        exposedModule: './homeModule',
      }).then((m) => m.HomeModule),
  },

  //Load multilple mfe on home page

  {
    matcher: startsWith('angular1'),
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: MFE_APP1_URL,
      exposedModule: './homeModule',

      elementName: 'app1-element',
    } as WebComponentWrapperOptions,
  },

  {
    matcher: startsWith('angular2'),
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: MFE_APP2_URL,
      exposedModule: './homeModule',

      elementName: 'app2-element',
    } as WebComponentWrapperOptions,
  },

  //=========
  // {
  //   path: '',
  //   outlet: 'mfe1',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       type: 'module',
  //       remoteEntry: MFE_APP1_URL,
  //       exposedModule: './homeModule',
  //     }).then((m) => m.HomeModule),
  // },
  // {
  //   path: '',
  //   outlet: 'mfe2',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       type: 'module',
  //       remoteEntry: MFE_APP2_URL,
  //       exposedModule: './homeModule',
  //     }).then((m) => m.HomeModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
