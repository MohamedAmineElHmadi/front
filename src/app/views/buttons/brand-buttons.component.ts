import { Component } from '@angular/core';
import {Question} from "../../Entities/question";
import {QuestionServiceService} from "../../Service/question-service.service";
import {UserQuestion} from "../../Entities/user-question";
import {Tag} from "../../Entities/tag";
import {TagServiceService} from "../../Service/tag-service.service";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {Ressource} from "../../Entities/ressource";
import {Router} from "@angular/router";
import {UeServiceService} from "../../Service/ue-service.service";
import {Ue} from "../../Entities/Ue";
import {User} from "../../Entities/user";
import {UsersServicesService} from "../../Service/users-services.service";
import {AuthService} from "../../Service/auth.service";

@Component({
  templateUrl: 'brand-buttons.component.html'
})
export class BrandButtonsComponent {
  ressources:any[];
  currentFileUpload: File;
  selectedFiles: FileList;
  Q:Question=new Question();
  tags:String;
  ressource:Ressource=new Ressource();
  ues:Ue[];
  idmod:any;
  user:User;
  constructor(private service:QuestionServiceService,private tagservice:TagServiceService,private ueservice:UeServiceService,private router:Router,
              private  userservice:UsersServicesService) { }

  cencor(text):String{
    this.service.cencortext(text).subscribe(data=>{
      console.log(data);
      return data;
    });
    return "test";

  }
  addQuestion(){
      this.Q.title=this.cencor(this.Q.title)
      this.Q.content=this.cencor(this.Q.content)
      this.tags=this.cencor(this.tags)
      this.service.addQuestion(this.Q).subscribe(question=>{
        this.tagservice.addTag(this.tags,question.idQuestion).subscribe();
        this.router.navigate(['#/question/questions'])
      });

  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  uploadFile() {
    if(this.selectedFiles != undefined) {
      for (let i = 0; i < this.selectedFiles.length; i++) {

        this.currentFileUpload = this.selectedFiles.item(0);
        this.service.uploadFile(this.currentFileUpload).subscribe(data => {
          this.ressource.libelle = data;
          if (data.split(".")[1] == "pdf")
            this.ressource.type = "PDF";
          else
            this.ressource.type = "Image";
          this.service.addRessource(this.ressource).subscribe(idr => {


            this.service.cencortext(this.Q.title).subscribe(data => {
              this.Q.title = data
              this.service.cencortext(this.Q.content).subscribe(data1 => {
                this.Q.content = data1
                this.service.cencortext(this.tags).subscribe(data2 => {
                  this.tags = data2;
                  this.service.addQuestionwithRessource(this.Q, idr, this.user.id,this.idmod).subscribe(question => {

                    console.log(question.idQuestion)
                    this.tagservice.addTag(this.tags, question.idQuestion).subscribe();
                    this.router.navigate(['/question/questions'])
                  });

                });

              });

            });

          });
        })
      }
    }
    else{
      this.service.cencortext(this.Q.title).subscribe(data => {
        this.Q.title = data
        this.service.cencortext(this.Q.content).subscribe(data1 => {
          this.Q.content = data1
          this.service.cencortext(this.tags).subscribe(data2 => {
            this.tags = data2;
            this.service.addQuestionwithoutRessource(this.Q, this.user.id,this.idmod).subscribe(question => {
              console.log(question.idQuestion)
              this.tagservice.addTag(this.tags, question.idQuestion).subscribe();
              this.router.navigate(['/question/questions'])

            });

          });

        });

      });

    }

  }
  ngOnInit(): void{

    this.userservice.getinformations().subscribe(us=>{
      this.user=us;
    })
    this.ueservice.getUes().subscribe((modules:any)=>{
      this.ues=modules;
      console.log(modules)
    })
  }

  logmod(){
    console.log(this.idmod)
  }
}
