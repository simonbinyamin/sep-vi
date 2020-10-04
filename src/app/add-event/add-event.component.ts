import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { event } from '../../models/event.model';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css'],
  providers: [UserService]
})
export class AddEventComponent implements OnInit {

  isDecorationsChecked: boolean;
  isPartiesChecked: boolean;
  isPhotosChecked: boolean;
  isBreakfestChecked: boolean;
  isDrinksChecked: boolean;

  valueBudget: number;
  valueRecord: string;
  valueName: string;
  valueType: string;
  valueFrom: Date;
  valueTo: Date;
  valueAttend: number;

  constructor(private _userService: UserService) { }


  ngOnInit(): void {
  }


  addEvent() {

    const prefs = new Array<string>();

    if (this.isDecorationsChecked == true) {
      prefs.push("Decorations");
    }
    if (this.isPartiesChecked == true) {
      prefs.push("Parties");
    }
    if (this.isPhotosChecked == true) {
      prefs.push("Photos");
    }
    if (this.isBreakfestChecked == true) {
      prefs.push("Breakfest");
    }
    if (this.isDrinksChecked == true) {
      prefs.push("Drinks");
    }

  const evejnt = new event(this.valueRecord, this.valueName, this.valueFrom,
      this.valueTo, this.valueAttend, this.valueBudget, prefs);



    this._userService.PostEvent(evejnt).subscribe((l: event) => {
      console.log(l);


    });



  }


}
