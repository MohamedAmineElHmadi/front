import {Component, OnDestroy} from '@angular/core';
import {Response} from "../../Entities/response";
import {AnswerServiceService} from "../../Service/answer-service.service";
import {UserQuestion} from "../../Entities/user-question";
import {ActivatedRoute, Router} from "@angular/router";
import {Question} from "../../Entities/question";
import {QuestionServiceService} from "../../Service/question-service.service";
import {TagServiceService} from "../../Service/tag-service.service";
import {User} from "../../Entities/user";
import {UsersServicesService} from "../../Service/users-services.service";


@Component({
  templateUrl: 'dropdowns.component.html',
  styleUrls: ['dropdowns.component.css']
})
export class DropdownsComponent {
  Qu:Question=new Question();
A:Response=new Response();
userresponse:UserQuestion[];
id:any;
us:User;
question:UserQuestion;
similarquestion:UserQuestion[]
  constructor(private service:AnswerServiceService,private router: Router,private Activatedroute: ActivatedRoute,
              private questionservice:QuestionServiceService,private tagService:TagServiceService,
              private userservice:UsersServicesService) { }

  ngOnInit(): void{
  this.userservice.getinformations().subscribe(uss=>{
    this.us=uss;
  })
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
    this.A.idUser=this.us.id;
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
