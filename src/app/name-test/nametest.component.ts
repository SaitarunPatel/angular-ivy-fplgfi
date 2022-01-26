import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { InsertDeets } from '../states/nametest/name.action';
import { UserInter } from '../states/nametest/userinterface';

@Component({
  selector: 'my-name',
  templateUrl: './nametest.component.html',
  styleUrls: ['./nametest.component.css'],
})
export class NameTest {
  nameData$: Observable<UserInter>;
  DisplayName: UserInter;

  constructor(private store: Store<{ NamaTest: UserInter }>) {
    this.nameData$ = this.store.select('NamaTest');
    this.nameData$.subscribe((data) => {
      this.DisplayName = JSON.parse(JSON.stringify(data));
    });
  }

  getdetails(fname: string, lname: string) {
    console.log(fname + lname);
    let obj = {
      Fname: fname,
      Lname: lname,
    };
    this.store.dispatch(InsertDeets({ nameAction: obj }));
    // console.log('namedata is : \n\n\n' + );
    this.nameData$.subscribe((data) => {
      console.log('Subscribed to this shit: ' + JSON.stringify(data));
    });
  }
}
