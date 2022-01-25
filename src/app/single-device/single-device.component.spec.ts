import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDeviceComponent } from './single-device.component';

describe('SingleDeviceComponentComponent', () => {
  let component: SingleDeviceComponent;
  let fixture: ComponentFixture<SingleDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
