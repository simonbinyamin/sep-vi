import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  providers: [UserService]
})
export class AddTaskComponent implements OnInit {


  
  valueDep: string;
  valueRole: string;

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }
  onItemChange(value){
    console.log(" Value is : ", value );
 }


  addTask() {

  }
}
