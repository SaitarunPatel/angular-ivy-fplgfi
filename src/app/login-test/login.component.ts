import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginInter } from '../states/login/logininterface';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginTest {
  // nameData$: Observable<UserInter>;
  // DisplayName: UserInter;

  // constructor(private store: Store<{ NamaTest: UserInter }>) {
  //   this.nameData$ = this.store.select('NamaTest');
  //   this.nameData$.subscribe((data) => {
  //     this.DisplayName = JSON.parse(JSON.stringify(data));
  //   });
  // }

  constructor() {}

  LoginNow(email: string, password: string) {
    console.log('email: ' + email + '\n Password: ' + password);
  }
}
