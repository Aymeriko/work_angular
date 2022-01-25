import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';


@Component({
  selector: 'app-device-view',
  templateUrl: './device-view.component.html',
  styleUrls: ['./device-view.component.scss']
})
export class DeviceViewComponent implements OnInit {

  devices!: any[];
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  constructor( private deviceService: DeviceService ) { }

  ngOnInit(): void {
    this.devices = this.deviceService.devices;
  }

  onSwitch(){
    this.deviceService.onSwitch();
  }
  
  onSwitchOn(){
    this.deviceService.onSwitchOn();
  }

  onSwitchOff(){
    if ( confirm ( "Switch everything off ?" ) ) {
      this.deviceService.onSwitchOff();
    }
  }  


}
