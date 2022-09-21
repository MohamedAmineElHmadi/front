import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/Entities/cours';
import { lienUtile } from 'src/app/Entities/lienUtile';
import { CourseService } from 'src/app/Service/course-service.service';
import {LienUtileService} from '../../../Service/lien-utile.service'
@Component({
  selector: 'app-add-lien',
  templateUrl: './add-lien.component.html',
  styleUrls: ['./add-lien.component.scss']
})
export class AddLienComponent implements OnInit {
  listCourses:Cours[];
  list:lienUtile[];
  lien:lienUtile=new lienUtile();
  message:any;
  arrIndex:any = [];
  a:boolean=true;
  searchText:string

  constructor(private LUService:LienUtileService,private courseService:CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((res:any)=>{this.listCourses=res;
      console.log(this.listCourses) })
    }
    
  postLU() {
   
    this.LUService.createLU(this.lien).subscribe((res)=>{
    console.log(res)});
    this.lien=new lienUtile(); 
    }
  reset(){
    this.lien.libelle="" 
  }
 
  
}
