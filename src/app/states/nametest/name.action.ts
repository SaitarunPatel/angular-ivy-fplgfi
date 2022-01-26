import { createAction, props } from '@ngrx/store';
import { UserInter } from './userinterface';

export const InsertDeets = createAction(
  '[name-test] Insert Fname and Lname',
  props<{ nameAction: UserInter }>()
);
// { Fname: string; Lanme: string }
