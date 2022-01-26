import { createAction, props } from '@ngrx/store';
// import { props } from '@ngrx/store/src/action_creator';

export const Incre = createAction('[my-counter] Increment');

export const Reset = createAction('[my-counter] Reset');

export const IncreWithNumber = createAction(
  '[my_counter] Increment with number',
  props<{ tarun: number }>()
);
