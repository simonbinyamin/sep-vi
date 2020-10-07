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
  constructor(private _userService: UserService) { }

  ngOnInit() {

  }

rejectEvent(){
  alert("Event rejected");
}
  
acceptEvent(e){
  alert("Event accepted is forwarded to "+ e);
}
  

findEvent() {


  const evejnt = new event("", this.valueName);



    this._userService.GetEvent(evejnt).subscribe((l: event) => {

      const evet3= [l];
      console.log(l);
      this.evet = evet3;




    });



  }


}
