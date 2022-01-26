import { createReducer, on } from '@ngrx/store';
import { UserInter } from './userinterface';
import { InsertDeets } from './name.action';

export const UserProfileInitalizer: UserInter = {
  Fname: 'Tarun',
  Lname: 'Patel',
};

export const _dataGet = createReducer(
  UserProfileInitalizer,
  on(InsertDeets, (state, action) => {
    console.log('State : \n\n' + JSON.stringify(action));
    console.log('\n\naction' + JSON.stringify(action));
    return {
      Fname: action.nameAction.Fname,
      Lname: action.nameAction.Lname,
    };
  })
);

// on(InsertDeets, (state, { nameAction }) => ({
//   Fname: nameAction.Fname,
//   Lname: nameAction.Lname,
// }))

// (state, nameAction) => (
//   {
//     Fname: nameAction.nameAction.Fname,
//     Lname: nameAction.nameAction.Lname
//   }
// )

export function DataGet(state, action) {
  return _dataGet(state, action);
}
