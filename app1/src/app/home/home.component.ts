import {
  Component,
  EventEmitter,
  Injector,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { SharedLibService } from 'shared-lib';
import { Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private sharedLibService: SharedLibService,
    private injector: Injector
  ) {
    this.injector
      .get(SharedLibService)
      .getData()
      .subscribe((data: any) => {
        console.log('iconstructor', data);
        this.data = data;
      });
  }
  data: any;
  title = 'home 1 mfe';

  ngOnInit(): void {
    this.sharedLibService.getData().subscribe((data: any) => {
      console.log('mfe1', data);
      this.data = data;
    });
  }

  sendData() {
    this.sharedLibService.setData(this.title);
  }
}
