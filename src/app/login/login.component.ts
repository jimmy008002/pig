import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import{Request}from '../model/Request'
import { ApiService } from '../api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string = '';
  passWord: string = '';
  loginTitle: string = ''
  passwordSeen: boolean = true;
  message: string = '';
   request: Request = new Request();
  currentDate: Date = new Date();

  constructor(private api: ApiService,private router: Router, private user: UserService) { }

  ngOnInit(): void {
  }

  login() {
    // Default username & password: admin
   /* if (this.userName == 'admin' && this.passWord == 'admin') {
      this.user.setUserLoginStatus(true);
      this.router.navigate(['Dashboard/FarmManagement']);
    } else {
      this.message = "Username or password is incorrect.";
    }*?*/
    this.request.body.adminUser.admin_user_account = this.userName;
    this.request.body.adminUser.admin_user_password = this.passWord;

    this.api.WebLogin(this.request).subscribe(data => {
     console.log(data.body[0]) 
      if (data.code === "406") {
        this.message = "User is not found";
      }
      if (data.code === "405") {
        this.message = "Password is not correct.";
      }
      if (data.code === "200") {
      //  this.user.setUserInfo(data.body[0]);
        this.user.setUserLoginStatus(true);
        this.router.navigate(['Dashboard/FarmManagement']);
      }
    })
  }
  
  changePasswordFormat() {
    this.passwordSeen = !this.passwordSeen;
    document.getElementById("PassWord").focus();
  }

}
