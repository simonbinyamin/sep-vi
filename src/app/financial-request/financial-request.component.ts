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
  valueResult:string;

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

    if(l.result=="ok") {
      this.valueResult = "Request successful created!";
    } else {
      this.valueResult = "form is not filled correctly";
    }



  });



 }
}
