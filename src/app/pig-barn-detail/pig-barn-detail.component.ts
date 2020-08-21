import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PigBarn } from '../model/PigBarn';
// import 'rxjs/add/operator/switchMap';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { PigInfo } from '../model/PigInfo';
import { DatePipe } from '@angular/common';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pig-barn-detail',
  templateUrl: './pig-barn-detail.component.html',
  styleUrls: ['./pig-barn-detail.component.css']
})
export class PigBarnDetailComponent implements OnInit {

  // Pagination config
  config: any;

  // Fontawesome
  leftIcon = faAngleLeft;
  rightIcon = faAngleRight;

  ascendingName: boolean;
  ascendingTime: boolean;
  pi: PigInfo[];
  pigBarnList: PigBarn[];
  pigBarnListDisplay: PigBarn[];
  pigBarn: PigBarn;
  pigInfoList: PigInfo[];
  pigInfoListDisplay: PigInfo[];
  pigBarnName: String;
  pigNumber: number;
 apiUrl:string;

  constructor(private api: ApiService, private route: ActivatedRoute, private datePipe: DatePipe,private http: HttpClient) {
    this.config = {
      currentPage: 1,
      itemsPerPage: 8
    };
  }

  // Getg(){

  //   return this.pigInfoList = [
  //     new PigInfo(1, "Hexing Farm", "合興農場", new Date('2020-06-21T09:12:00')),
  //     new PigInfo(2, "Hexing Farm", "合興農場", new Date('2020-06-11T10:00:01')),
  //     new PigInfo(3, "Hexing Farm", "合興農場", new Date('2020-06-11T10:00:01')),
  //     new PigInfo(4, "Hexing Farm", "合興農場", new Date('2020-06-11T11:00:01')),
  //     new PigInfo(5, "Hexing Farm", "合興農場", new Date('2020-06-11T10:00:01')),
  //     new PigInfo(6, "Hexing Farm 1", "合興農場 1", new Date('2020-06-01T13:11:10')),
  //     new PigInfo(71, "Hexing Farm 2", "合興農場 2", new Date('2020-06-01T15:11:10')),
  //     new PigInfo(8, "Hexing Farm 3", "合興農場 3", new Date('2020-06-01T14:11:10')),
  //     new PigInfo(9, "Hexing Farm 4", "合興農場 4", new Date('2020-06-01T11:11:10')),
  //     new PigInfo(10, "Hexing Farm 5", "合興農場 5", new Date('2020-06-01T11:11:10')),
  //     new PigInfo(11, "Hexing Farm 6", "合興農場 6", new Date('2020-06-01T11:11:10')),
  //     new PigInfo(12, "Hexing Farm 7", "合興農場 7", new Date('2020-06-01T11:11:10')),
  //   ];



  // }

   Getdetection(id:number){
    
    this.apiUrl = 'http://119.81.130.181:13090/com.jimmy_pig_farm_test.web.api/service/json/Getdetect';
    let body={
      "body": {
        "detect": {
             "pig_barn_id":id}}

      
    };
  return this.http.post(this.apiUrl,body)

  }




  ngOnInit(): void {
    this.api.GetPigBarnList().subscribe((data: any) => {
      this.pigBarnList = data.body;
      // this.pi= this.Getg();
      this.pigBarnListDisplay = this.pigBarnList;
      
      this.route.params.subscribe(params => {
        
        this.pigBarnListDisplay.forEach((p: PigBarn) => {
          if (p.pig_barn_id == params['id']) {
           
            console.log(p.pig_barn_id);
           
            this.Getdetection(p.pig_barn_id).subscribe((data1:any)=>{
           this.pi=data1.body
           this.pigInfoListDisplay = this.pi;
           this.pigNumber = this.pigInfoListDisplay.length;
           console.log(this.pi);
          })
         
            this.pigBarn = p;
            console.log(p);
            this.pigBarnName = this.pigBarn.pig_barn_name;

          }
        })
      })
    })


    // this.route.params.subscribe(params => {
    //   this.pigBarnList.forEach((p: PigBarn) => {
    //     if (p.pig_barn_id == params["id"]) {
    //       this.pigBarn = p;
    //       this.pigBarnName = this.pigBarn.pig_barn_name;
    //       // this.pigInfoList = this.pigBarn.pig_info_list;
    //       this.pigInfoListDisplay = this.pigBarn.pig_info_list;
    //       this.pigNumber = this.pigInfoList.length;
    //     }
    //   });
    // });



    this.ascendingName = true;
    this.ascendingTime = true;
  }

  pageChange(event) {
    this.config.currentPage = event;
  }

  // sortData(array: Array<number | string>): Array<number | string> {
  //   return array.sort((a, b) => a < b ? -1 : 1);
  // }

  sortByName() {
    this.ascendingName = !this.ascendingName;
    let sortedResult = this.pigBarn.pig_info_list.sort((a, b) => {
      let x = a.farm_english_name.trim().toLowerCase();
      let y = b.farm_english_name.trim().toLowerCase();
      if (this.ascendingName) {
        return x == y ? 0 : x > y ? 1 : -1;
      } else {
        return x == y ? 0 : x < y ? 1 : -1;
      }
    }
    );

    this.pigBarn.pig_info_list = sortedResult;
    // console.log(this.pigBarn.pig_info_list);
    // console.log(this.ascendingName);
  }

  sortByTime() {
    this.ascendingTime = !this.ascendingTime;
    let sortedResult = this.pigBarn.pig_info_list.sort((a, b) => {
      let x = a.date_time;
      let y = b.date_time;
      if (this.ascendingTime) {
        return x == y ? 0 : x > y ? 1 : -1;
      } else {
        return x == y ? 0 : x < y ? 1 : -1;
      }
    }
    );

    this.pigBarn.pig_info_list = sortedResult;
    // console.log(this.pigBarn.pig_info_list);
    // console.log(this.ascendingName);
  }

  // ascendingSortByName() {
  //   let sortedResult = this.pigBarn.pig_info_list.sort((a, b) => {
  //         let x = a.farm_name_en.trim().toLowerCase();
  //         let y = b.farm_name_en.trim().toLowerCase();
  //       return x == y ? 0 : x > y ? 1 : -1;
  //     }
  //   );
  //   this.pigBarn.pig_info_list = sortedResult;
  //   // console.log(sortedResult);
  // }

  // descendingSortByName() {
  //   let sortedResult = this.pigBarn.pig_info_list.sort((a, b) => {
  //         let x = a.farm_name_en.trim().toLowerCase();
  //         let y = b.farm_name_en.trim().toLowerCase();
  //       return x == y ? 0 : x < y ? 1 : -1;
  //     }
  //   );
  //   this.pigBarn.pig_info_list = sortedResult;
  //   // console.log(sortedResult);
  // }

  // ascendingSortByTime() {
  //   let sortedResult = this.pigBarn.pig_info_list.sort((a, b) => {
  //         let x = a.date_time;
  //         let y = b.date_time;
  //       return x == y ? 0 : x > y ? 1 : -1;
  //     }
  //   );
  //   this.pigBarn.pig_info_list = sortedResult;
  // }

  // descendingSortByTime() {
  //   let sortedResult = this.pigBarn.pig_info_list.sort((a, b) => {
  //         let x = a.date_time;
  //         let y = b.date_time;
  //       return x == y ? 0 : x < y ? 1 : -1;
  //     }
  //   );
  //   this.pigBarn.pig_info_list = sortedResult;
  // }


}
