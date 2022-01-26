import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Incre, Reset, IncreWithNumber } from './states/counter/counter.action';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  counterNGRX$: Observable<number>;
  tempdata$: Observable<number>;

  // constructor(private store: Store<{ CounterSt: number; CustomCnt: number }>) {
  constructor(private store: Store<{ CounterSt: number }>) {
    this.counterNGRX$ = this.store.select('CounterSt');
    // this.tempdata$ = this.store.select('CustomCnt');
  }

  IncrementNGRX() {
    this.store.dispatch(Incre());
  }
  ResetNGRX() {
    this.store.dispatch(Reset());
  }
  // tempx : number = -1;
  IncrementwithNumberNGRX(data: string) {
    console.log('NGRX data is: ' + data);
    // this.tempx = parseInt(data)
    this.store.dispatch(IncreWithNumber({ tarun: parseInt(data) }));
    // this.store.dispatch(IncreWithNumber({ tarun: parseInt(data) }));
  }
}
