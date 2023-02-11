import { CanDeactivate } from "@angular/router";
import { CarsComponent } from "src/app/component/cars/cars.component";

export class DeactivateGuard implements CanDeactivate<CarsComponent> {
    canDeactivate(component: CarsComponent): boolean {
      if(component.showPopUp) {
        return confirm('are you sure you want to leave this page');
      }
      return true;
    }
  }