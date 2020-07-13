import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FarmInfo } from '../model/FarmInfo';


@Component({
  selector: 'app-farm-management',
  templateUrl: './farm-management.component.html',
  styleUrls: ['./farm-management.component.css']
})
export class FarmManagementComponent implements OnInit {

  config: any;

  farmList: FarmInfo[];
  farmListDisplay: FarmInfo[];

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) {
    // pagination config
    this.config = {
      currentPage: 1,
      itemsPerPage: 8
    };
    
  }

  ngOnInit() {
    this.farmList = this.api.GetFarmList();
    this.farmListDisplay = this.farmList;
  }

  farmSearchFilter(filterValue: string) {
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

  pageChange(event) {
    this.config.currentPage = event;
  }

}
