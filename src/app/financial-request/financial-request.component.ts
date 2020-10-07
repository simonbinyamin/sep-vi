import { Component, OnInit } from '@angular/core';
import { financial } from 'src/models/financial.model';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-financial-request',
  templateUrl: './financial-request.component.html',
  styleUrls: ['./financial-request.component.css'],
  providers: [UserService]
})
export class FinancialRequestComponent implements OnInit {

  
  valueDep: string;
  valueRef: string;
  valueAmount: number;
  valueReason: string;

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }


    
  onItemChange(value){
    console.log(" Value is : ", value );
 }

 addFinancialRequest() { 

  
  const req = new financial(this.valueDep,this.valueRef,this.valueAmount,this.valueReason);



  this._userService.PostFinancial(req).subscribe((l: financial) => {
    console.log(l);
    if(l.amount) {
      location.href = "/FinList/";
    }


  });



 }
}
