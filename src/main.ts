import 'zone.js/dist/zone';
import { Component, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ListComponent } from './components/list.component';
import { LeftieRightieComponent } from './components/leftie-rightie.component';
import { DetailComponent } from './components/detail.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    ListComponent,
    LeftieRightieComponent,
    DetailComponent,
  ],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular
    </a>
    
    <leftie-rightie>
      <div>
      <h1>Left</h1>
      <app-list [selected]="selected"></app-list>
      </div>  
      <div>
      <h1>Right</h1>
      <app-detail [selected]="selected()"></app-detail>
      </div> 
    </leftie-rightie>
  `,
})
export class App {
  name = 'Angular';

  selected: WritableSignal<string> = signal('');
}

bootstrapApplication(App);
