import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { lienUtile } from 'src/app/Entities/lienUtile';
import { CourseService } from 'src/app/Service/course-service.service';
import { LienUtileService } from 'src/app/Service/lien-utile.service';
import {Cours} from '../../../Entities/cours';
@Component({
  selector: 'app-form-course',
  templateUrl: './form-course.component.html',
  styleUrls: ['./form-course.component.scss']
})
export class FormCourseComponent implements OnInit {
  list:Cours[];
  listLien:lienUtile[]
  cours:Cours=new Cours();
  message:any;
  arrIndex:any = [];
  a:boolean=true;
  searchText:string;
  idCourse: number
  idlien: number
  show:boolean=true;
  candelete=true;
  lien:lienUtile= new lienUtile();


  constructor(private coursService:CourseService, private lienService:LienUtileService) { }

  ngOnInit(): void {
   this.coursService.getCourses().subscribe((res:any)=>{this.list=res;})
   this.lienService.getLUs().subscribe((res:any)=>{this.listLien=res;})
  }

  postCourse() {
  this.coursService.createCourse(this.cours).subscribe((res)=>{
    console.log(res)});
    this.cours=new Cours(); 
    }
    check(id:number){
      this.listLien.forEach((c:any) => {
        console.log(c)
        if (c.courslien!==null&&c.courslien.idCours===id)
        {alert("can't delete this course")
          this.candelete=false;
        }
      });
    }
    showform(){
      this.show=!this.show;
  
    }
  
  deleteCourse(id:number){
    this.check(id)
    if(this.candelete){
    this.coursService.deleteCourse(id).subscribe((res)=>{
      console.log(res)})
      this.list= this.list.filter(s => {
        return s.idCours != id;
      }
      );
    }
  }
  selectOption() {
    this.show=!this.show;
    this.coursService.assignCourseLu(this.lien,this.idCourse).subscribe((res)=>{
    console.log(res)
    this.lien=new lienUtile()

    })
  }
}
