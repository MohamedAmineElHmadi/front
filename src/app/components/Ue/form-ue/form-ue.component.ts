import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/Entities/cours';
import { lienUtile } from 'src/app/Entities/lienUtile';
import { Ue } from 'src/app/Entities/Ue';
import { CourseService } from 'src/app/Service/course-service.service';
import { LienUtileService } from 'src/app/Service/lien-utile.service';
import{UeServiceService} from '../../../Service/ue-service.service'
@Component({
  selector: 'app-form-ue',
  templateUrl: './form-ue.component.html',
  styleUrls: ['./form-ue.component.scss']
})
export class FormUeComponent implements OnInit {

  listCourses:Cours[];
  listLien:lienUtile[];
  list:Ue[];
  lienUtile:Ue=new Ue();
  lien:lienUtile=new lienUtile();
  cours:Cours= new Cours();
  message:any;
  arrIndex:any = [];
  searchText:string
  idCourse: number
  idUe: number
  show:boolean=true;
  candelete=true;
  

  constructor(private ueService:UeServiceService,private LUService:LienUtileService,private courseService:CourseService) { }

  ngOnInit(): void {
   this.ueService.getUes().subscribe((res:any)=>{this.list=res;})
   this.courseService.getCourses().subscribe((res:any)=>{this.listCourses=res;
    console.log(this.listCourses) })
    
  }
  check(id:number){
    this.listCourses.forEach(c => {
      if (c.uecours!==null&&c.uecours.idUE===id)
      {alert("can't delete this UE")
        this.candelete=false;
      }
    });
  }


  deleteUe(id:number){
    this.check(id)
    if(this.candelete){
    this.ueService.deleteUe(id).subscribe((res)=>{
      console.log(res)})
      this.list= this.list.filter((u:any) => {
        return u.idUe != id;
      }
      );
    }
   
}
  showform(){
    this.show=!this.show;}
  
  postCourse() {
    this.courseService.createCourse(this.cours).subscribe((res)=>{
      console.log(res)});
      this.cours=new Cours(); 
      console.log(this.cours)
      }

  selectOption() {
    this.show=!this.show;
    this.ueService.assignCourseUE(this.cours,this.idUe).subscribe((res)=>{
    console.log(res)
    console.log("this.cours")
    this.cours=new Cours()

    })
  }

    reset(){
      this.cours.libelle=""
    }
 
}
