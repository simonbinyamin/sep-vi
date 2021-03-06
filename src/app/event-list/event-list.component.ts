import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { event } from '../../models/event.model';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers: [UserService]
})
export class EventListComponent implements OnInit {
  evet: event[];
  role = localStorage.getItem('role');
  valueName: string;
  valueComment: string;
  valueComment2: string;
  constructor(private _userService: UserService) { }

  ngOnInit() {

  }

  onComment() {
    this.valueComment2 = this.valueComment;
  }


  rejectEvent() {
    this.valueComment2 = "Event rejected";
  }

  acceptEvent(e) {
    this.valueComment2 = "Event accepted is forwarded to " + e;
  }


  findEvent() {


    const evejnt = new event("", this.valueName);



    this._userService.GetEvent(evejnt).subscribe((l: event) => {

      const evet3 = [l];
      console.log(l);
      this.evet = evet3;
    });



  }


}
