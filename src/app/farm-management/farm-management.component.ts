import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import {masterfile } from '../model/FarmInfo';


@Component({
  selector: 'app-farm-management',
  templateUrl: './farm-management.component.html',
  styleUrls: ['./farm-management.component.css']
})
export class FarmManagementComponent implements OnInit {

  config: any;

  farmList: masterfile[];
  farmListDisplay: masterfile[];

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) {
    // pagination config
    this.config = {
      currentPage: 1,
      itemsPerPage: 8
    };
    
  }

  ngOnInit() {
    
    this.api.GetFarmList().subscribe((data:any) =>{
    this.farmList=data.body
    this.farmListDisplay = this.farmList
    console.log(this.farmListDisplay)
  }
  );  
  
    
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
        if (item.farm_english_name.toString().toLocaleLowerCase().includes(filterValue) 
            || item.farm_chinese_name.toString().toLocaleLowerCase().includes(filterValue)) {
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

  uploadCSV() {
    
  }

}
