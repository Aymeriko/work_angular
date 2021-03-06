import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-single-device',
  templateUrl: './single-device.component.html',
  styleUrls: ['./single-device.component.scss']
})
export class SingleDeviceComponent implements OnInit {

  name: string = 'Device';
  status: string = 'Status';

  constructor( private deviceService: DeviceService, 
               private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const id= +this.route.snapshot.params['id'];
    this.name = this.deviceService.getDeviceById(id)!.name;
    this.status = this.deviceService.getDeviceById(id)!.status;
  }

}
