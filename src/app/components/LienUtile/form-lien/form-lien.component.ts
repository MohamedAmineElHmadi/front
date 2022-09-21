import { Component, OnInit } from '@angular/core';
import { lienUtile } from 'src/app/Entities/lienUtile';
import { LienUtileService } from 'src/app/Service/lien-utile.service';

@Component({
  selector: 'app-form-lien',
  templateUrl: './form-lien.component.html',
  styleUrls: ['./form-lien.component.scss']
})
export class FormLienComponent implements OnInit {

  list:lienUtile[];
  lienUtile:lienUtile=new lienUtile();
  message:any;
  arrIndex:any = [];
  searchText:string

  constructor(private LUService:LienUtileService) { }

  ngOnInit(): void {
   this.LUService.getLUs().subscribe((res:any)=>{this.list=res;})
  }


  
  deletelien(id:number){
    this.LUService.deleteLU(id).subscribe((res)=>{
      console.log(res)})
      this.list= this.list.filter(lu => {
        return lu.idLien != id;
      }
)
  }
}
