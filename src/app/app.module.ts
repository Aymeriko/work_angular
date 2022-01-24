import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import { DeviceService } from './services/device.service';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { DeviceViewComponent } from './device-view/device-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    AuthComponent,
    DeviceViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DeviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
