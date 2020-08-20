import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from './model/Request';
import { Observable, EMPTY } from 'rxjs';
import { catchError, retry, timeout } from 'rxjs/operators';
import { masterfile } from './model/FarmInfo';
import { PigBarn } from './model/PigBarn';
import { PigInfo } from './model/PigInfo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = '';
  object: Object = '';

  farmList: masterfile[];
  pigBarnList: PigBarn[];
  pigInfoList: PigInfo[];
  
  constructor(private http: HttpClient) { }

  WebLogin(request: Request): Observable<any> {
    this.object = {
      header: {},
      body: {
        adminUser: {
          admin_user_account: request.body.adminUser.admin_user_account,
          admin_user_password: request.body.adminUser.admin_user_password
        }
      }
    }
    // console.log(this.object);
    // this.apiUrl = 'http://119.81.130.181:13090/com.emed_delmet_detection.web.api/service/json/GetAdminUser'
    this.apiUrl = '';
    return this.http.post(this.apiUrl, this.object).pipe(retry(3), timeout(1000),
      catchError(() => { return EMPTY; }),
      res => {
        return res;
      }
    );
  }

  GetFarmList() {
    // test data
    this.apiUrl = 'http://119.81.130.181:13090/com.jimmy_pig_farm_test.web.api/service/json/GetMasterFile';
    let body={};
  return this.http.post(this.apiUrl,body).pipe(retry(3), timeout(1000),
  catchError(() => { return EMPTY; }),
  res => {
    return res;
  }
);

  }


  GetPigBarnList() {
    // test data
    this.pigInfoList = [
      new PigInfo(1, "Hexing Farm", "合興農場", new Date('2020-06-21T09:12:00')),
      new PigInfo(2, "Hexing Farm", "合興農場", new Date('2020-06-11T10:00:01')),
      new PigInfo(3, "Hexing Farm", "合興農場", new Date('2020-06-11T10:00:01')),
      new PigInfo(4, "Hexing Farm", "合興農場", new Date('2020-06-11T11:00:01')),
      new PigInfo(5, "Hexing Farm", "合興農場", new Date('2020-06-11T10:00:01')),
      new PigInfo(6, "Hexing Farm 1", "合興農場 1", new Date('2020-06-01T13:11:10')),
      new PigInfo(71, "Hexing Farm 2", "合興農場 2", new Date('2020-06-01T15:11:10')),
      new PigInfo(81, "Hexing Farm 3", "合興農場 3", new Date('2020-06-01T14:11:10')),
      new PigInfo(9, "Hexing Farm 4", "合興農場 4", new Date('2020-06-01T11:11:10')),
      new PigInfo(10, "Hexing Farm 5", "合興農場 5", new Date('2020-06-01T11:11:10')),
      new PigInfo(11, "Hexing Farm 6", "合興農場 6", new Date('2020-06-01T11:11:10')),
      new PigInfo(12, "Hexing Farm 7", "合興農場 7", new Date('2020-06-01T11:11:10')),
    ];
    
    this.apiUrl = 'http://119.81.130.181:13090/com.jimmy_pig_farm_test.web.api/service/json/Getburn';
  let body={};
  return this.http.post(this.apiUrl,body).pipe(retry(3), timeout(1000),
  catchError(() => { return EMPTY; }),
  res => {
    return res;
  }
);

    
  }

}
