import { CommonModule } from '@angular/common';
import { Component, Input, Signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  template: `<ul *ngIf="selected">
    <li *ngFor="let m of data" (click)="setSelection(m)">
    <ng-container *ngIf="m == selected(); else notSelected">
      <mark>{{m}}</mark>
      </ng-container>
      <ng-template #notSelected>{{m}}</ng-template>
    </li>
    </ul>
    `,
  imports: [CommonModule],
})
export class ListComponent {
  @Input() selected!: WritableSignal<string>;
  data = ['one', 'two', 'three', 'four'];

  setSelection(d: string) {
    this.selected.set(d);
  }
}
