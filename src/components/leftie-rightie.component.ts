import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'leftie-rightie',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div style="display: grid; grid-template-columns: 1fr 1fr;">
    <ng-content></ng-content>
  </div>
  `,
})
export class LeftieRightieComponent {}
