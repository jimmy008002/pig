import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userLoginStatus: boolean = false;

  constructor() { }

  public getUserLoginStatus(): boolean {
    return this.userLoginStatus;
  }
  
  public setUserLoginStatus(login: boolean): void {
    this.userLoginStatus = login;
  }



}
