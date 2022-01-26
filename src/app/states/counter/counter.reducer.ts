import { createReducer, on } from '@ngrx/store';
import { Incre, Reset, IncreWithNumber } from './counter.action';

export const Count_initial: number = 0;

export const _counterReducer = createReducer(
  Count_initial,

  on(Incre, (state) => state + 1),
  on(Reset, (state) => 42),
  on(IncreWithNumber, (state, { tarun }) => tarun + state)
);

export function CounterReducer(state, action) {
  return _counterReducer(state, action);
}
