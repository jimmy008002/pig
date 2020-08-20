import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PigBarn } from '../model/PigBarn';
// import 'rxjs/add/operator/switchMap';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { PigInfo } from '../model/PigInfo';
import { DatePipe } from '@angular/common';
import { ApiService } from '../api.service';

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
  
  pigBarnList: PigBarn[];
  pigBarnListDisplay: PigBarn[];
  pigBarn: PigBarn;
  pigInfoList: PigInfo[];
  pigInfoListDisplay: PigInfo[];
  pigBarnName: String;
  pigNumber: number;


  constructor(private api: ApiService, private route: ActivatedRoute, private datePipe: DatePipe) {
    this.config = {
      currentPage: 1,
      itemsPerPage: 8
    };
  }

  ngOnInit(): void {
      this.api.GetPigBarnList().subscribe((data:any) => {
      this.pigBarnList= data.body;
      this.pigBarnListDisplay = this.pigBarnList;
     console.log(this.pigBarnListDisplay)
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

    this.route.params.subscribe(params => {
      this.pigBarnListDisplay.forEach((p: PigBarn) => {
        if (p.pig_barn_id == params['id']) {
          this.pigBarn = p;
          this.pigBarnName = this.pigBarn.pig_barn_name;
          this.pigInfoListDisplay = this.pigBarn.pig_info_list;
          this.pigNumber = this.pigInfoListDisplay.length;
        }
      })
    })

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
          let x = a.farm_name_en.trim().toLowerCase();
          let y = b.farm_name_en.trim().toLowerCase();
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
