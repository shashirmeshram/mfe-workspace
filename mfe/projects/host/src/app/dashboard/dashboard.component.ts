import { Component, ElementRef, inject } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

const MFE_APP1_URL = 'http://localhost:5001/remoteEntry.js';
const MFE_APP2_URL = 'http://localhost:5001/remoteEntry.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  items: WebComponentWrapperOptions[] = [
    {
      remoteEntry: 'http://localhost:5001/remoteEntry.js',
    remoteName: 'app1',
    exposedModule: './web-components',
    elementName: 'app1-element',
    },
    {
      remoteEntry: 'http://localhost:5002/remoteEntry.js',
    remoteName: 'app2',
    exposedModule: './web-components',
    elementName: 'app2-element',
    },
  ];
  elm = inject(ElementRef);

  async ngOnInit() {
    await loadRemoteModule('app1', './web-components');
    const app1 = document.createElement('app1-element');

    await loadRemoteModule('app2', './web-components');
    const app2 = document.createElement('app2-element');
  }
}
