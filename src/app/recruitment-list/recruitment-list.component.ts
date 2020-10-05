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
  constructor(private _userService: UserService) { }

  ngOnInit() {


    this._userService.GetRecruitments().subscribe((list: recruitment[]) => {
      this.recruit = list;
      console.log(list);
  });


  }
}
