import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DebtsComponent } from './debts/debts.component';
import { DebtformComponent } from './debtform/debtform.component';
import { DebtlistingComponent } from './debtlisting/debtlisting.component';

import './rxjs-operators';

@NgModule({
  declarations: [
    AppComponent,
    DebtsComponent,
    DebtformComponent,
    DebtlistingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
