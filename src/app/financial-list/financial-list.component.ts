import { Component, OnInit } from '@angular/core';
import { financial } from 'src/models/financial.model';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-financial-list',
  templateUrl: './financial-list.component.html',
  styleUrls: ['./financial-list.component.css'],
  providers: [UserService]
})
export class FinancialListComponent implements OnInit {

  request: financial[];
  valueUpdate:string;
  valueUpdate2:string;
  role = localStorage.getItem('role');
  valueDep: string;

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  
  update(){
    alert("status updated");
    this.valueUpdate2 = this.valueUpdate;
  }
  findRequest() {
  
  
    const req = new financial(this.valueDep);
  
  
  
      this._userService.GetFinancial(req).subscribe((l: financial) => {
  
        const req3= [l];
        console.log(l);
        this.request = req3;
  
  
  
  
      });
  
  
  
    }

}
