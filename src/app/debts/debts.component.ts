import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.css']
})
export class DebtsComponent implements OnInit {
  constructor() { }

  showSentForm:boolean = false;
  showRecvForm:boolean = false;

  toggleSentForm(){
    this.showSentForm = !this.showSentForm;
    return false;
  }

  toggleRecvForm(){
    this.showRecvForm = !this.showRecvForm;
    return false;
  }

  ngOnInit() {
  }

}
