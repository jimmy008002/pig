import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-side-menu',
  templateUrl: './top-side-menu.component.html',
  styleUrls: ['./top-side-menu.component.css']
})
export class TopSideMenuComponent implements OnInit {

  user_name: string = '';
  constructor(private user: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.user.setUserLoginStatus(false);
    this.router.navigate(["/"]);
  }

}
