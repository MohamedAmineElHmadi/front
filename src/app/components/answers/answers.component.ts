import { Component, OnInit } from '@angular/core';
import {Question} from "../../Entities/question";
import {Response} from "../../Entities/response";
import {UserQuestion} from "../../Entities/user-question";
import {AnswerServiceService} from "../../Service/answer-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionServiceService} from "../../Service/question-service.service";
import {TagServiceService} from "../../Service/tag-service.service";

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnInit {
idcc:String;
  Qu:Question=new Question();
  A:Response=new Response();
  userresponse:UserQuestion[];
  id:any;
  question:UserQuestion;
  similarquestion:UserQuestion[]
  constructor(private service:AnswerServiceService,private router: Router,private Activatedroute: ActivatedRoute,
              private questionservice:QuestionServiceService,private tagService:TagServiceService) { }

  ngOnInit(): void{

    this.idcc=sessionStorage.getItem("id");
    this.Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.service.getQuestionAnswers(this.id).subscribe(listres=>{
        this.userresponse=listres;
      })
      this.questionservice.getQuestion(this.id).subscribe(ques=>{
        this.question=ques;
        this.tagService.getSimilarQuestionByTag(this.question.tags).subscribe(data=>{
          this.similarquestion=data;
        })
      })

    });

  }
  addAnswer(){

    this.questionservice.cencortext(this.A.content).subscribe(cont=>{
      this.A.content=cont
      this.A.idUser=sessionStorage.getItem("id")
      this.service.addAnswer(this.A,this.id).subscribe(ans=>{
        this.Qu.idQuestion=this.id;
        this.questionservice.updateAnswerNumber(this.Qu).subscribe();
        this.router.navigate(['/question/questions'])
      });
    })

  }

  LikeQuestion(){
    this.Qu.idQuestion=this.id;
    this.questionservice.Like(this.Qu,1).subscribe();
  }

  DislikeQuestion(){
    this.Qu.idQuestion=this.id;
    this.questionservice.Dislike(this.Qu,1).subscribe();
  }

  GetSimilarQuestion(){
    this.tagService.getSimilarQuestionByTag(this.question.tags).subscribe(data=>{
      this.similarquestion=data;
    })
  }
}
