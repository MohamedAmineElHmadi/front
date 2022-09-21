import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ue } from 'src/app/Entities/Ue';
import { UeServiceService } from 'src/app/Service/ue-service.service';

@Component({
  selector: 'app-edit-ue',
  templateUrl: './edit-ue.component.html',
  styleUrls: ['./edit-ue.component.scss']
})
export class EditUeComponent implements OnInit {

  ue:Ue=new Ue();
  id:number

  constructor(private route:ActivatedRoute,private ueService:UeServiceService) { }
 
  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    console.log(this.id)
    this.ueService.getUe(this.id).subscribe((res:any)=>{
      this.ue=res;
      console.log(res.libelle)
    })
  }
  updateUe(){
    this.ueService.updateUe(this.ue,this.id).subscribe((res)=>{
      console.log(res)
      this.ue=new Ue()
    })
  }
  reset(){
    this.ue.libelle=""
  }
}
