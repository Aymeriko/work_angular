import { Component, OnInit } from '@angular/core';
import { DeviceService } from './services/device.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isAuth = false;
  devices: any[] = [];

  constructor( private deviceService: DeviceService ) {

    setTimeout(
      () => {
        this.isAuth = true ;
      }, 1000
    );

  }

  ngOnInit() {
    this.devices = this.deviceService.devices;
  }
  
}
