import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span *ngIf="selected">{{selected}}</span>
    <span *ngIf="!selected">Selected something.</span>
  `,
})
export class DetailComponent {
  @Input() selected?: string = undefined;
}
