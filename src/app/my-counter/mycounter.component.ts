import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Incre, Reset } from '../states/counter/counter.action';

@Component({
  selector: 'counter-component',
  templateUrl: './mycounter.component.html',
  styleUrls: ['./mycounter.component.css'],
})
export class Mycounter implements OnInit {
  counterWO: number = 0;

  constructor() {}
  ngOnInit() {}

  Increment() {
    this.counterWO = this.counterWO + 1;
  }
  Incrementwithnumber(data: string) {
    console.log('Data is: ' + data);
    this.counterWO = this.counterWO + parseInt(data);
  }
  reset() {
    this.counterWO = 0;
  }
}
