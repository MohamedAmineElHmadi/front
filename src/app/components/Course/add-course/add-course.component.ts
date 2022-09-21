import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/Entities/cours';
import { CourseService } from 'src/app/Service/course-service.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  list:Cours[];
  cours:Cours=new Cours();
  message:any;
  arrIndex:any = [];
  a:boolean=true;
  searchText:string

  constructor(private coursService:CourseService) { }

  ngOnInit(): void {
  
  }

  postCourse() {
  this.coursService.createCourse(this.cours).subscribe((res)=>{
    console.log(res)});
    this.cours=new Cours(); 
    }
  reset(){
    this.cours.libelle=""
  }
  
}
