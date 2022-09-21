import { Component } from '@angular/core';
import {AnswerServiceService} from "../../Service/answer-service.service";
import {UserQuestion} from "../../Entities/user-question";
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionServiceService} from "../../Service/question-service.service";
import {Response} from "../../Entities/response";
import {Question} from "../../Entities/question";

@Component({
  templateUrl: 'chartjs.component.html'
})
export class ChartJSComponent {
  R:Response=new Response();
  A:Response=new Response();
  Q:Question=new Question();
resnotapp:UserQuestion[];
  id:any;
  question:UserQuestion;
  constructor(private service:AnswerServiceService,private router: Router,private Activatedroute: ActivatedRoute,
              private questionservice:QuestionServiceService){

}

  ngOnInit(): void{


    this.Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.service.getQuestionAnswersNotApproved(this.id).subscribe(data=>{
        this.resnotapp=data;

      });
      this.questionservice.getQuestion(this.id).subscribe(ques=>{
        this.question=ques;
      })

    });
  }

  approveAnswer(id){
  this.R.idResponse=id;

  this.service.approveAnswer(this.R).subscribe(data2=>{
    this.Q.idQuestion=this.id;
    this.questionservice.CloseQuestion(this.Q).subscribe(data1=>{

      this.service.getQuestionAnswersNotApproved(this.id).subscribe(data=>{
        this.resnotapp=data;
        this.questionservice.getQuestion(this.id).subscribe(ques=>{
          this.question=ques;
        })

      });
    })

  });
  }
  addAnswer(){

  }

  cancelAnswer(id){
  this.service.deleteAnswer(id).subscribe(data=>{
    this.service.getQuestionAnswersNotApproved(this.id).subscribe(data=>{
      this.resnotapp=data;

    });
    });
  }

  CommentAnswer(id){
    this.R.idResponse=id;

    this.service.commentAnswer(this.R).subscribe(data=>{
      this.service.getQuestionAnswersNotApproved(this.id).subscribe(data=>{
        this.resnotapp=data;

      });
    });
  }
}
