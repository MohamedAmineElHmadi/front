import { Component, OnInit } from '@angular/core';
import {Question} from "../../../Entities/question";
import {UserQuestion} from "../../../Entities/user-question";
import {QuestionServiceService} from "../../../Service/question-service.service";
import {Router} from "@angular/router";
import {TagServiceService} from "../../../Service/tag-service.service";
import {FileMimeType} from "@taldor-ltd/angular-file-viewer";

@Component({
  selector: 'app-approveanswer',
  templateUrl: './approveanswer.component.html',
  styleUrls: ['./approveanswer.component.scss']
})
export class ApproveanswerComponent implements OnInit {

  file:any;
  role:any;
  Q:Question;
  userquestions:UserQuestion[];
  tag:String;
  type:any
  source:String;
  constructor(private service:QuestionServiceService,private router: Router,private tagService:TagServiceService) { }




  ngOnInit(): void{
    this.source="C:\Users\\ASUS\\OneDrive\\Bureau\\stage\\demande.pdf";
    this.type = FileMimeType.PDF;
    this.role="teacher"
    this.service.getTeachersQuestion().subscribe(data=>{
      this.userquestions=data;
      console.log(data[0]);

    })
  }

  askQuestion(){
    this.router.navigate(['/question/addquestion']);
  }

  searchByTag(){
    if(this.tag != ""){
      this.tagService.getQuestionByTag(this.tag).subscribe(questions=>{
        this.userquestions=questions;
      })}
    else{
      this.service.getTeachersQuestion().subscribe(data=>{
        this.userquestions=data;


      })
    }

  }

}
