import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DemoPipePipe } from './shared/demoPipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemoPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DemoPipePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
