import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Debt} from '../shared/debt.model';

@Component({
  selector: 'app-debtform',
  templateUrl: './debtform.component.html',
  styleUrls: ['./debtform.component.css']
})
export class DebtformComponent implements OnInit {
  debtForm:FormGroup;

  @Input() userid:string;
  @Input() debtType:string;
  @Output() cancelbtn = new EventEmitter();

  newdebt:Debt;
  cancel(){
    this.cancelbtn.emit();
  }
  constructor(fb:FormBuilder) { 
    this.debtForm = fb.group({
      'owedby': ['',Validators.required],
      'amount': ['', Validators.required],
      'datecreated': ['', Validators.required],
      'desc': ['']
    });
  }

  ngOnInit() {
  }

}
