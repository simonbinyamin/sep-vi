import { Component, OnInit } from '@angular/core';
import { user } from 'src/models/user.model';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  valueUsername:string;
  valuePassword:string;


  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  addUser(){
    const usjnt = new user(this.valueUsername, this.valuePassword);



    this._userService.PostLogin(usjnt).subscribe((l: user) => {
      console.log(l);
      localStorage.setItem('role', l.role);
      localStorage.setItem('uname', l.username);

      if(l.role) {
        location.href = "/LoggedIn";
      }


    });

  }

}
