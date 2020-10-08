import { Component, OnInit } from '@angular/core';
import { task } from 'src/models/task.model';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  providers: [UserService]
})
export class TaskListComponent implements OnInit {

  valuePlan: string;
  valueDep:string;
  evet: task;
  role = localStorage.getItem('role');
  uname = localStorage.getItem('uname');
  valueSubteamrole:string;
  valueSubteamrole2:string;
  valueResult: string;
  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  findTask() {
    const tasknt = new task(this.valueSubteamrole);
      this._userService.GetTask(tasknt).subscribe((l: task) => {
        console.log(l);
        this.evet = l;

      });
}

update(subteamrole, dep, plan) {

  const toDelTask = new task(subteamrole, dep, this.valuePlan);
  this._userService.DeleteTask(toDelTask).subscribe((l: task) => {
    console.log(l);
    if(l.result=="ok") {
      const toaddTask = new task(subteamrole, dep, plan);
      this._userService.PostTask(toaddTask).subscribe((l: task) => {
        console.log(l);
        if(l.result=="ok") {
          this.valueResult = "Task Updated!";
        }
      });
    }

  });



}

}
