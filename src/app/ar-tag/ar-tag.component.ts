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

  arTagSearchFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    
    let filterResult;
    if(filterValue === '' ) {
        this.farmListDisplay = this.farmList;
    } 
    else {
      filterResult = this.farmList.filter((item) => {
        if (item.farm_name_en.toString().toLocaleLowerCase().includes(filterValue)
            || item.farm_name_cn.toString().toLocaleLowerCase().includes(filterValue)) {
          return item;
        }
      });
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
