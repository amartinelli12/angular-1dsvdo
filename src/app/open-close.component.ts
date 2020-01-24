import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'open-close',
  templateUrl: '../../open-close.component.html',
  styles: [`:host {
  display: block;
}

.open-close-container {
  border: 1px solid #dddddd;
  margin-top: 1em;
  padding: 20px 20px 0px 20px;
  color: #000000;
  font-weight: bold;
  font-size: 20px;
}`],
  animations: [
    trigger('overlayToggled', [
      state('false', style({ display: 'none', opacity: 0 })),
      state('true', style({ display: 'block', opacity: 0.8 })),
      transition('* => *', animate('.2s')),
    ]),
    trigger('sideBarToggled', [
      state('false', style({ display: 'none', width: 0 })),
      state('true', style({ display: 'block', width: 400 })),
      transition('* => *', [animate('.3s')]),
    ]),
  ],
})
export class OpenCloseComponent  {
  isOpen = false;
  loading = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  openSideNav() {
    this.isOpen = !this.isOpen;
    this.loading = false;
    console.log(this.isOpen);
  }

}
