import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  } from '@angular/router';
import { Cours } from 'src/app/Entities/cours';
import { Ue } from 'src/app/Entities/Ue';
import { CourseService } from 'src/app/Service/course-service.service';
import { UeServiceService } from 'src/app/Service/ue-service.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
 
  constructor(private ueService:UeServiceService,private route:ActivatedRoute,
    private coursService:CourseService) { }
  id:number;
  list:Ue[];
  idUe: number=0;
  submitted = false;
  cours:Cours=new Cours

 
  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    console.log(this.id)
    this.coursService.getCourse(this.id).subscribe((res:any)=>{
      this.cours=res;
      console.log(res.libelle)
    })
    this.ueService.getUes().subscribe((res:any)=>{this.list=res;})
    console.log(this.idUe)

  }
  updateCours(){
    this.coursService.updateCourse(this.cours,this.cours.idCours).subscribe((res)=>{
      console.log(res)
    })
    this.ueService.assignCourseUE2(this.id,this.idUe).subscribe((res)=>{
      console.log(res)
    })
    this.cours=new Cours()

  }
  reset(){
    this.cours.libelle=""
  }
  
}
