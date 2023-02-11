import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './component/cars/cars.component';
import { HomeComponent } from './component/home/home.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { DeactivateGuard } from './shared/guard/deactivate.guard';
import { LayoutComponent } from './shared/layout/layout.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

const routes: Routes = [
{path:'',redirectTo:'/home',pathMatch:'full'},
 {
  path:'',
  component:LayoutComponent,
  children:[
    {path:'home',component:HomeComponent},
    {path:'cars',component:CarsComponent,canActivate:[AuthGuard],canDeactivate:[DeactivateGuard]}
  ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
