import { Component, OnInit } from '@angular/core';
import { Ue } from 'src/app/Entities/Ue';
import { UeServiceService } from 'src/app/Service/ue-service.service';

@Component({
  selector: 'app-add-ue',
  templateUrl: './add-ue.component.html',
  styleUrls: ['./add-ue.component.scss']
})
export class AddUeComponent implements OnInit {

  
  list:Ue[];
  ue:Ue=new Ue();
  message:any;
  arrIndex:any = [];
  a:boolean=true;
  searchText:string

  constructor(private ueService:UeServiceService) { }

  ngOnInit(): void {
    console.log(this.ue.libelle)
    }
    
  postUe() {
   
    this.ueService.createUe(this.ue).subscribe((res)=>{
    console.log(res)});
    this.ue=new Ue(); 
    }
    
    reset(){
      this.ue.libelle=""
    }
 
 
  
}
