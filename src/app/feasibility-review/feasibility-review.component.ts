import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { event } from '../../models/event.model';
@Component({
  selector: 'app-feasibility-review',
  templateUrl: './feasibility-review.component.html',
  styleUrls: ['./feasibility-review.component.css'], 
   providers: [UserService]

})
export class FeasibilityReviewComponent implements OnInit {

  evet: event;
  constructor(private _userService: UserService) { }

  ngOnInit() {

    this._userService.GetEventById("name").subscribe((m: event) => {

          this.evet = m;



  });



  }

}
