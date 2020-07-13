import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from './model/Request';
import { Observable, EMPTY } from 'rxjs';
import { catchError, retry, timeout } from 'rxjs/operators';
import { FarmInfo } from './model/FarmInfo';
import { PigBarn } from './model/PigBarn';
import { PigInfo } from './model/PigInfo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = '';
  object: Object = '';

  farmList: FarmInfo[];
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
    this.farmList = [
      { farm_id: 1, farm_name_en: 'New Territories Hong Kong Farm Pig', farm_name_cn: '新界佬香港農場豬' },
      { farm_id: 2, farm_name_en: 'Hexing Farm', farm_name_cn: '合興農場' },
      { farm_id: 3, farm_name_en: 'Hong Kong Domestic Pig', farm_name_cn: '香港家豬' },
      { farm_id: 4, farm_name_en: 'Huaji Farm', farm_name_cn: '華記農場' },
      { farm_id: 5, farm_name_en: 'Yuen Long Eternal Life Farm', farm_name_cn: '元朗永生農場' },
      { farm_id: 6, farm_name_en: 'Yuen Long Yingming Farm 1', farm_name_cn: '元朗英明農場 1' },
      { farm_id: 7, farm_name_en: 'Yuen Long Yingming Farm 2', farm_name_cn: '元朗英明農場 2' },
      { farm_id: 8, farm_name_en: 'Yuen Long Yingming Farm 3', farm_name_cn: '元朗英明農場 3' },
      { farm_id: 9, farm_name_en: 'Yuen Long Yingming Farm 4', farm_name_cn: '元朗英明農場 4' },
      { farm_id: 10, farm_name_en: 'Yuen Long Yingming Farm 5', farm_name_cn: '元朗英明農場 5' },
      { farm_id: 11, farm_name_en: 'Yuen Long Yingming Farm 6', farm_name_cn: '元朗英明農場 6' },
    ];

    return this.farmList;
  }

  GetPigBarnList() {
    this.pigInfoList = [
      new PigInfo(1, "Hexing Farm", "合興農場", new Date('2020-06-21T09:12:00')),
      new PigInfo(2, "Hexing Farm", "合興農場", new Date('2020-06-11T10:00:01')),
      new PigInfo(3, "Hexing Farm", "合興農場", new Date('2020-06-11T10:00:01')),
      new PigInfo(4, "Hexing Farm", "合興農場", new Date('2020-06-11T11:00:01')),
      new PigInfo(5, "Hexing Farm", "合興農場", new Date('2020-06-11T10:00:01')),
      new PigInfo(6, "Hexing Farm 1", "合興農場 1", new Date('2020-06-01T13:11:10')),
      new PigInfo(7, "Hexing Farm 2", "合興農場 2", new Date('2020-06-01T15:11:10')),
      new PigInfo(8, "Hexing Farm 3", "合興農場 3", new Date('2020-06-01T14:11:10')),
      new PigInfo(9, "Hexing Farm 4", "合興農場 4", new Date('2020-06-01T11:11:10')),
      new PigInfo(10, "Hexing Farm 4", "合興農場 5", new Date('2020-06-01T11:11:10')),
      new PigInfo(11, "Hexing Farm 4", "合興農場 6", new Date('2020-06-01T11:11:10')),
      new PigInfo(12, "Hexing Farm 4", "合興農場 7", new Date('2020-06-01T11:11:10')),
    ];
    
    this.pigBarnList = [
      new PigBarn(1, "Pig Barn 1", this.pigInfoList),
      new PigBarn(2, "Pig Barn 2", this.pigInfoList),
      new PigBarn(3, "Pig Barn 3", this.pigInfoList)
    ];

    return this.pigBarnList;
  }

}
