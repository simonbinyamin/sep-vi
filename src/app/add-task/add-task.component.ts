import { Component, OnInit } from '@angular/core';
import { task } from 'src/models/task.model';
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
  valueSubteam: string;
  valuePlan:string;
  valueResult:string;

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }
  onItemChange(value){
    console.log(" Value is : ", value );
 }


  addTask() {
    const taskjnt = new task(this.valueSubteam, this.valueDep, this.valuePlan);



    this._userService.PostTask(taskjnt).subscribe((l: task) => {
      console.log(l);
      if(l.result=="ok") {
        this.valueResult = "Task successful created!";
      } else {
        this.valueResult = "form is not filled correctly";
      }



    });
  }
}
