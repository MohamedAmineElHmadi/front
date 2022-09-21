import { Component, OnInit } from '@angular/core';
import {Question} from "../../Entities/question";
import {Ressource} from "../../Entities/ressource";
import {QuestionServiceService} from "../../Service/question-service.service";
import {TagServiceService} from "../../Service/tag-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent  {

  ressources:any[];
  currentFileUpload: File;
  selectedFiles: FileList;
  Q:Question=new Question();
  tags:String;
  ressource:Ressource=new Ressource();
  constructor(private service:QuestionServiceService,private tagservice:TagServiceService,private router:Router) { }

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

  }

}
