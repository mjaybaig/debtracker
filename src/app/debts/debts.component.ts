import { Component, OnInit, Input } from '@angular/core';
import {DebtService} from './../shared/debt.service';
import {Debt} from './../shared/debt.model';

@Component({
  selector: 'app-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.css'],
  providers: [DebtService]
})

export class DebtsComponent implements OnInit {
  private userid:string="585eda4af36d2873dac7b9b3";
  constructor(private debtService:DebtService) { }

  private showSentForm:boolean = false;
  private showRecvForm:boolean = false;

  @Input() debtType:string;
  errorMessage:string;

  debts:Debt[];

  @Input() temp:string;


  toggleSentForm(){
    this.showSentForm = !this.showSentForm;
    return false;
  }

  toggleRecvForm(){
    this.showRecvForm = !this.showRecvForm;
    return false;
  }
   getDebts(){
    this.debtService.getOwedToMe(this.userid)
                        .subscribe(
                          debts => { this.debts = debts },
                          error => {
                            this.errorMessage = "Error in getting debts: "+<any>error;
                          }
                        );
  }
  ngOnInit() {
    this.getDebts();
  }

}
