import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { recruitment } from '../../models/recruitment.model';
@Component({
  selector: 'app-recruitment-request',
  templateUrl: './recruitment-request.component.html',
  styleUrls: ['./recruitment-request.component.css'],
  providers: [UserService]
})
export class RecruitmentRequestComponent implements OnInit {

  valueType: string;
  valueDep: string;
  valueExyears: number;
  valueJobtitle: string;
  valueJobdesc: string;
  valueResult: string;

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  
  onItemChange(value){
    console.log(" Value is : ", value );
 }

 onItemChangeType(value){
  console.log(" Value is : ", value );
}

  addRecruitment() {


  const rec = new recruitment(this.valueType, this.valueDep, this.valueExyears,
      this.valueJobtitle, this.valueJobdesc);



    this._userService.PostRecruitment(rec).subscribe((l: recruitment) => {
      console.log(l);
      if(l.result=="ok") {
        this.valueResult = "Recruitment successful created!";
      } else {
        this.valueResult = "form is not filled correctly";
      }


    });



  }
}
