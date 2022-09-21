import { Component, OnInit } from '@angular/core';
import {QuestionServiceService} from "../../Service/question-service.service";
import {User} from "../../Entities/user";
import {UsersServicesService} from "../../Service/users-services.service";

@Component({
  selector: 'app-chart-profile',
  templateUrl: './chart-profile.component.html',
  styleUrls: ['./chart-profile.component.scss']
})
export class ChartProfileComponent implements OnInit {
  pieChartData: number[];
  pieChartLabels: string[];
  pos:number=0
  modules:string[]=new Array()
  ocuu:number[]=new Array()
  pieChartType:string= 'pie';
  isLoaded:boolean=false;
  user:User;
  constructor(private service:QuestionServiceService,private userService:UsersServicesService) { }

  ngOnInit(): void {
    this.userService.getinformations().subscribe(uss=>{
      this.user=uss;
    })
    let occ=0
    let occd=0
    let posd=0
    let som=0;
    this.service.profileUser(this.user.option,this.user.niveau).subscribe(dict=> {


      do {
        posd = dict.indexOf('"', this.pos + 1)
        this.pos = dict.indexOf('"', posd + 1)
        this.modules.push(dict.substring(posd + 1, this.pos))


      } while (this.pos != -1 && this.pos < dict.length && posd != -1)
      this.modules.splice(this.modules.length - 1);
      do {
        occd = dict.indexOf(",", occ + 2) + 2
        occ = dict.indexOf(']', occd)
        this.ocuu.push(Number(dict.substring(occd, occ)))
      }while (occ != -1 && occd != -1 && occ+3<dict.length)
      for (let i = 0; i < this.ocuu.length; i++){
        som=this.ocuu[i]+som
      }
      for (let j = 0; j < this.ocuu.length; j++){
        this.ocuu[j]=(this.ocuu[j]/som)*100
      }


      this.pieChartData=this.ocuu;
      this.pieChartLabels=this.modules;

      this.isLoaded=true
    })


  }
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
