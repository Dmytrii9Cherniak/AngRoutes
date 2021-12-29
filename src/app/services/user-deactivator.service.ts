import {Injectable} from '@angular/core';
import {CanDeactivate} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserDeactivatorService implements CanDeactivate<boolean> {

  constructor() {
  }

  canDeactivate () : boolean {
    return confirm('leave from users page?');
  }


}
