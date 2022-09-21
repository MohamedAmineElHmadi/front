import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cours } from 'src/app/Entities/cours';
import { lienUtile } from 'src/app/Entities/lienUtile';
import { CourseService } from 'src/app/Service/course-service.service';
import { LienUtileService } from 'src/app/Service/lien-utile.service';

@Component({
  selector: 'app-edit-lien',
  templateUrl: './edit-lien.component.html',
  styleUrls: ['./edit-lien.component.scss']
})
export class EditLienComponent implements OnInit {
 lienUtile:lienUtile=new lienUtile
 id:number
 list:Cours[]
 idCourse: number=0
 submitted = false;
 link:lienUtile=new lienUtile;



  constructor(private route:ActivatedRoute,private lienUtileService:LienUtileService,private coursService:CourseService) { }
 
  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    console.log(this.id)
    this.lienUtileService.getLU(this.id).subscribe((res:any)=>{
      this.lienUtile=res;
      console.log(res.libelle)
    })

    this.coursService.getCourses().subscribe((res:any)=>{this.list=res;    console.log(this.list)
    })
    console.log(this.idCourse)
  }
  updateLien(){
    this.lienUtileService.updateLU(this.lienUtile,this.lienUtile.idLien).subscribe((res)=>{
      console.log(res)
    })
    this.coursService.assignCourseLu2(this.idCourse,this.id).subscribe((res)=>
    {console.log(res)}
    )
    this.lienUtile=new lienUtile()

  }
  somethingChanged(){
   console.log(this.idCourse)
  }

  reset(){
    this.lienUtile.libelle=""
    this.lienUtile.content=""

  }
}
