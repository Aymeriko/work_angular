import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  @Input() deviceName: string = 'Undefined device';
  @Input() deviceStatus: string = 'Switched Off';
  @Input() index: number = 0;

  constructor( private deviceService: DeviceService ) { 
  }

  ngOnInit(): void {
  }

  getStatus() {
    return this.deviceStatus;
  }

  getColor() {
    if (this.deviceStatus == "Off"){
      return 'red';
    }else if (this.deviceStatus == "On" ) {
      return 'green'
    }else{
      return'white';
    }
    
  }

  onSwitch () {
    if ( this.deviceStatus === 'Off'){
      this.deviceService.onSwitchOnOne(this.index)
    } else if ( this.deviceStatus === 'On' ) {
      this.deviceService.onSwitchOffOne(this.index)
    }

  }

}
