export class DeviceService {
  
  devices = [
    {
      id: 1,
      name: 'Washing Machine',
      status: 'Off'
    },
    {
      id: 2,
      name: 'Dishwasher',
      status: 'On'
    },
    {
      id: 3,
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

  getDeviceById(id: number) {
    const device = this.devices.find(
      (s) => {
        return s.id === id;
      }
    );
    return device;
}


}
