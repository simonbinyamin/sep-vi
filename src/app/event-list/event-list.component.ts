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
  constructor(private _userService: UserService) { }

  ngOnInit() {


    this._userService.GetEvents().subscribe((list: event[]) => {
      this.evet = list;
      console.log(list);
  });


  }

}
