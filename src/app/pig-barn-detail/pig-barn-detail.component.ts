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

  config: any;

  leftIcon = faAngleLeft;
  rightIcon = faAngleRight;
  
  pigBarnList: PigBarn[];
  pigBarn: PigBarn;
  pigInfoList: PigInfo[];
  pigBarnName: String;
  pigNumber: number;


  constructor(private api: ApiService, private route: ActivatedRoute, private datePipe: DatePipe) {
    this.config = {
      currentPage: 1,
      itemsPerPage: 8
    };
  }

  ngOnInit(): void {
    this.pigBarnList = this.api.GetPigBarnList();

    this.route.params.subscribe(params => {
      this.pigBarnList.forEach((p: PigBarn) => {
        if (p.pig_barn_id == params["id"]) {
          this.pigBarn = p;
          this.pigBarnName = this.pigBarn.pig_barn_name;
          this.pigInfoList = this.pigBarn.pig_info_list;
          this.pigNumber = this.pigInfoList.length;

        }
      });
    });
  }

  pageChange(event) {
    this.config.currentPage = event;
  }

  sortData(array: Array<number | string>): Array<number | string> {
    return array.sort((a, b) => a < b ? -1 : 1);
  }

  ascendingSortByName() {
    let sortedResult = this.pigBarn.pig_info_list.sort((a, b) => {
          let x = a.farm_name_en.trim().toLowerCase();
          let y = b.farm_name_en.trim().toLowerCase();
        return x == y ? 0 : x > y ? 1 : -1;
      }
    );
    this.pigBarn.pig_info_list = sortedResult;
    // console.log(sortedResult);
  }

  descendingSortByName() {
    let sortedResult = this.pigBarn.pig_info_list.sort((a, b) => {
          let x = a.farm_name_en.trim().toLowerCase();
          let y = b.farm_name_en.trim().toLowerCase();
        return x == y ? 0 : x < y ? 1 : -1;
      }
    );
    this.pigBarn.pig_info_list = sortedResult;
    // console.log(sortedResult);
  }

  ascendingSortByTime() {
    let sortedResult = this.pigBarn.pig_info_list.sort((a, b) => {
          let x = a.date_time;
          let y = b.date_time;
        return x == y ? 0 : x > y ? 1 : -1;
      }
    );
    this.pigBarn.pig_info_list = sortedResult;
  }

  descendingSortByTime() {
    let sortedResult = this.pigBarn.pig_info_list.sort((a, b) => {
          let x = a.date_time;
          let y = b.date_time;
        return x == y ? 0 : x < y ? 1 : -1;
      }
    );
    this.pigBarn.pig_info_list = sortedResult;
  }


}
