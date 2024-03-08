import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { HomeModule } from './app/home/home.module';
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));


  console.log("app1 bootstrap");
// import { HomeModule } from './app/home/home.module';
// import { bootstrap } from '@angular-architects/module-federation-tools';

// bootstrap(HomeModule, {
//   production: false,
//   appType: 'microfrontend'
// });

// const ngVersion = require('../package.json').dependencies['@angular/core']; // better just take the major version

// (window as any).plattform = (window as any).plattform || {};
// let platform = (window as any).plattform[ngVersion];
// if (!platform) {
//   platform = platformBrowser();
//   (window as any).plattform[ngVersion] = platform;
// }
// platform.bootstrapModule(AppModule)
//   .catch((err: any) => console.error(err));
