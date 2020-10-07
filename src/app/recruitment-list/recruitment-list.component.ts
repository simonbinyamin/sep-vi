import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { recruitment } from '../../models/recruitment.model';
@Component({
  selector: 'app-recruitment-list',
  templateUrl: './recruitment-list.component.html',
  styleUrls: ['./recruitment-list.component.css'],
  providers: [UserService]
})
export class RecruitmentListComponent implements OnInit {

  recruit: recruitment[];
  valueUpdate:string;
  valueUpdate2:string;
  role = localStorage.getItem('role');
  valueDep: string;
  constructor(private _userService: UserService) { }

  ngOnInit() {

  }


  updateJob(){
    alert("status updated");
    this.valueUpdate2 = this.valueUpdate;
  }

  findJob() {
  
  
    const recjnt = new recruitment("", this.valueDep);
  
  
  
      this._userService.GetJob(recjnt).subscribe((l: recruitment) => {
  
        const rec3= [l];
        console.log(l);
        this.recruit = rec3;
  
  
  
  
      });
  
  
  
    }

}
