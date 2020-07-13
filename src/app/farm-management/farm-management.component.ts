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

  searchFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();

    let filterResult = this.farmList.filter(item => 
      Object.keys(item).some(k => item[k] != null && 
      item[k].toString().toLowerCase()
      .includes(filterValue.toLowerCase())));
    
    if (filterValue.length == 0) {
      this.farmListDisplay = this.farmList
      // console.log(this.farmList);
    } else {
      this.farmListDisplay = filterResult;
      // console.log(filterResult);
    }
    this.config.currentPage = 1;
    // console.log(this.farmListDisplay);
  }

  pageChange(event) {
    this.config.currentPage = event;
  }

}
