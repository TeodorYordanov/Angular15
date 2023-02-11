import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { CarsComponent } from './component/cars/cars.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './shared/layout/layout.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { DeactivateGuard } from './shared/guard/deactivate.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarsComponent,
    NavbarComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [AuthGuard,DeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
