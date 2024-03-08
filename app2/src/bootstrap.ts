import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

  console.log("app2 bootstrap");
// import { HomeModule } from './app/home/home.module';
// import { bootstrap } from '@angular-architects/module-federation-tools';

// bootstrap(HomeModule, {
//   production: false,
//   appType: 'microfrontend'
// });

