import { Component, OnInit } from '@angular/core';
import { PigBarn } from '../model/PigBarn';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pig-barn',
  templateUrl: './pig-barn.component.html',
  styleUrls: ['./pig-barn.component.css']
})
export class PigBarnComponent implements OnInit {

  config: any;

  pigBarnList: PigBarn[];
  pigBarnListDisplay: PigBarn[];

  constructor(private api: ApiService) {
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
   
  }

  pageChange(event) {
    this.config.currentPage = event;
  }
  

}
