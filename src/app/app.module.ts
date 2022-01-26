import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Mycounter } from './my-counter/mycounter.component';
import { NameTest } from './name-test/nametest.component';
import { LoginTest } from './login-test/login.component' 

import { CounterReducer } from './states/counter/counter.reducer';
// import { DataCounter } from './states/counter/DataCounter.reducer'
import { DataGet } from './states/nametest/name.reducer';
// 
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ CounterSt: CounterReducer , NamaTest: DataGet}),
  ],
  declarations: [AppComponent, HelloComponent, Mycounter, NameTest, LoginTest],
  bootstrap: [AppComponent],
})
export class AppModule {}
