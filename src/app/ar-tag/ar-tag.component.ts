import { Component, OnInit } from '@angular/core';
import { FarmInfo } from '../model/FarmInfo';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ar-tag',
  templateUrl: './ar-tag.component.html',
  styleUrls: ['./ar-tag.component.css']
})
export class ArTagComponent implements OnInit {

  config: any;
  currentFarm: FarmInfo;
  currentDateTime;

  // farmList: FarmInfo[] = [
  //   { farm_id: 1, farm_name_en: 'English name 1', farm_name_cn: '中文1' },
  //   { farm_id: 2, farm_name_en: 'English name 2', farm_name_cn: '中文2' },
  //   { farm_id: 3, farm_name_en: 'English name 3', farm_name_cn: '中文3' },
  //   { farm_id: 4, farm_name_en: 'English name 4', farm_name_cn: '中文4' },
  //   { farm_id: 5, farm_name_en: 'English name 5', farm_name_cn: '中文5' },
  //   { farm_id: 6, farm_name_en: 'English name 6', farm_name_cn: '中文6' },
  //   { farm_id: 7, farm_name_en: 'English name 7', farm_name_cn: '中文7' },
  //   { farm_id: 8, farm_name_en: 'English name 8', farm_name_cn: '中文8' },
  //   { farm_id: 9, farm_name_en: 'English name 9', farm_name_cn: '中文9' },
  //   { farm_id: 9, farm_name_en: 'English name 9', farm_name_cn: '中文9' }
  // ];
  
  farmList: FarmInfo[];
  farmListDisplay: FarmInfo[];

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router, private datePipe: DatePipe) {
    this.config = {
      currentPage: 1,
      itemsPerPage: 5
    };

    this.currentDateTime = Date.now();
    // Refresh date & time every second
    setInterval(() => {
      this.currentDateTime = new Date()
    }, 1000);
  }

  ngOnInit(): void {
    this.farmList = this.api.GetFarmList();
    this.farmListDisplay = this.farmList;
    this.currentFarm = this.farmListDisplay[0];
  }

  pageChange(event) {
    this.config.currentPage = event;
  }

  searchFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    
    let filterResult = this.farmList.filter(item => 
      Object.keys(item).some(k => item[k] != null && 
      item[k].toString().toLowerCase()
      .includes(filterValue.toLowerCase())));
    
    if (filterValue.length == 0) {
      // console.log(this.farmList);
      this.farmListDisplay = this.farmList
    } else {
      // console.log(filterResult);
      this.farmListDisplay = filterResult;
    }
    this.config.currentPage = 1;
    // console.log(this.farmListDisplay);
  }

  activateFarmTag(farm: FarmInfo) {
    this.currentFarm = farm;
    this.currentDateTime = Date.now();
    // console.log(farm);
  }

}
