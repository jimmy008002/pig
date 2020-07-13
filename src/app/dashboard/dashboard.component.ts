import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  farmClass: String;
  pigClass: String;
  linklists: any = [
    {id: 0 ,name: "Farm Management" ,selected: false, router: "Dashboard/FarmManagement"},
    {id: 1 ,name: "Pig Barn" ,selected: false, router: "Dashboard/PigBarn"}
  ]
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.selectTitle(0)
  }

  selectTitle(index : number): void{
    this.linklists.forEach(element => {
      if(element.id === index){
        element.selected = true;
        this.router.navigate([element.router]);
      }
      else
      {
        element.selected = false; 
      }
    });
  }

}
