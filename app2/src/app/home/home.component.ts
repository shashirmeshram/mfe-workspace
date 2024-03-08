import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  Injector,
  NgZone,
  OnInit,
} from '@angular/core';
import { SharedLibService } from 'shared-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private sharedLibService: SharedLibService,
    private ref: ChangeDetectorRef,
    private injector: Injector,
    private zone: NgZone
  ) {
    this.sharedLibService.getData().subscribe((data: any) => {
      console.log('constructor2', data);
      //this.ref.detectChanges();
    });
  }
  data: any;
  ngOnInit(): void {
    this.sharedLibService.getData().subscribe((data: any) => {
      this.data = data;
      //this.ref.detectChanges();
    });
  
  }
}
