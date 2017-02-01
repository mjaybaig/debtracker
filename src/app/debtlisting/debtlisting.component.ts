import { Component, OnInit, OnChanges, SimpleChanges, Input, EventEmitter, Output, Pipe } from '@angular/core';
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
  @Input() listingtype:string;
  @Output() newdebt = new EventEmitter();

  debtView:Debt[] = [];

  createNew():boolean{
    let dType:string = this.debtType;
    this.newdebt.emit({
          debtType: dType
        });
    return false;
  }


  openDebts(){
    let tempDebts:Debt[] = [];
    if(this.debts && this.debts.length > 0){
      for(let d of this.debts){
        if(!d.isClosed){
          tempDebts.push(d);
        }
      }
      this.debtView = tempDebts;
    }
  }

  closeDebts(){
    let tempDebts:Debt[] = [];
    if(this.debts && this.debts.length > 0){
      for(let d of this.debts){
        if(d.isClosed){
          tempDebts.push(d);
        }
      }
      this.debtView = tempDebts;
    }
  }

  allDebts(){
    this.debtView = this.debts;
  }

  constructor() { 

  }
 
  ngOnInit() {

  }

  ngOnChanges(changedDebt:SimpleChanges){
    // this.debts = changedDebt['debts'].currentValue;
    // console.log(this.debts);
    // if(changedDebt['listingtype']){
    //   if(changedDebt['listingtype'].currentValue == 'opendebts'){
    //     this.openDebts();
    //   }
    //   else if(changedDebt['listingtype'].currentValue == 'closedebts'){
    //     this.closeDebts();
    //   }
    // }
    if(changedDebt['listingtype']){
      if(changedDebt['listingtype'].currentValue == 'opendebts'){
        this.openDebts();
      }
      else if(changedDebt['listingtype'].currentValue == 'closedebts'){
        this.closeDebts();
      }
      console.log(this.debtView);
      console.log(changedDebt['listingtype'].currentValue);
    }
  }
}
