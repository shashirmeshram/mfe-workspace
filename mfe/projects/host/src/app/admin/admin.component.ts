import { Component, OnInit } from '@angular/core';
import { SharedLibService } from 'shared-lib';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  title = 'host';
  data: any;

  constructor(private sharedLibService: SharedLibService) {}
  ngOnInit() {
    this.sharedLibService.getData().subscribe((data: any) => {
      //console.log(data);
      this.data = data;
    });
  }

  sendData() {
   // this.sharedLibService.setData(this.title);
  }
}
