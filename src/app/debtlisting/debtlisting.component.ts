import { Component, OnInit, OnChanges, SimpleChanges, Input, Pipe } from '@angular/core';
import {Debt} from './../shared/debt.model';


@Component({
  selector: 'app-debtlisting',
  templateUrl: './debtlisting.component.html',
  styleUrls: ['./debtlisting.component.css']
})

export class DebtlistingComponent implements OnInit, OnChanges {

  errorMessage:string;
  @Input() debts:Debt[];
  @Input() debtType:string;
  
  constructor() { 

  }
 
  ngOnInit() {

  }

  ngOnChanges(changedDebt:SimpleChanges){
    // this.debts = changedDebt['debts'].currentValue;
    // console.log(this.debts);
  }

}
