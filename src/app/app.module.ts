import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [MapComponent, AppComponent],
  imports: [BrowserModule],
  providers: [provideHttpClient()],
  bootstrap: [],
})
export class AppModule {}
