export class DeviceService {
  
  devices = [
    {
      name: 'Washing Machine',
      status: 'Off'
    },
    {
      name: 'Dishwasher',
      status: 'On'
    },
    {
      name: 'Phone',
      status: 'Off'
    }
  ];

  onSwitch(){
    console.log('Switching...');

    for ( let device of this.devices ){
      if (device.status == "Off") {
        device.status = "On";
      }else if (device.status == "On"){
        device.status = "Off";
      }
    }

  }
  
  onSwitchOn(){
    for ( let device of this.devices ){
      device.status = "On"
    }
  }
  
  onSwitchOff(){
    for ( let device of this.devices ){
      device.status = "Off"
    }

  }

  onSwitchOnOne(i:number){
    this.devices[i].status = "On";
  }

  onSwitchOffOne(i:number){
    this.devices[i].status = "Off";
  }


}
