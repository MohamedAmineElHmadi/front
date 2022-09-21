import {Component, ElementRef, Renderer2} from '@angular/core';
import {QuestionServiceService} from "../../Service/question-service.service";
import {Question} from "../../Entities/question";
import {UserQuestion} from "../../Entities/user-question";
import {Router} from "@angular/router";
import {TagServiceService} from "../../Service/tag-service.service";
import {FileMimeType} from "@taldor-ltd/angular-file-viewer";
import {User} from "../../Entities/user";
import {UsersServicesService} from "../../Service/users-services.service";

@Component({
  templateUrl: 'buttons.component.html',
  styleUrls: ['buttons.component.css']

})
export class ButtonsComponent {
  user:User;
  file:any;
  role:any;
  Q:Question;
  userquestions:UserQuestion[];
  tag:String;
  type:any
  source:String;
  constructor(private service:QuestionServiceService,private router: Router,private tagService:TagServiceService,
              private renderer: Renderer2,private elementRef: ElementRef,
              private userService:UsersServicesService) { }



openv(){

  this.service.downloadFile("certif3.pdf").subscribe(data=> {

    /*var binary_string =  atob(data);
    var len = binary_string.length;
    var bytes = new Uint8Array( len );
    for (var i = 0; i < len; i++)        {
      bytes[i] = binary_string.charCodeAt(i);
    }
    let blob: any = new Blob([bytes.buffer], { type: 'application/octet-stream' });
  console.log(data)

    let blobb = new Blob([data], {type: 'application/pdf'});
    let pdfUrl = window.URL.createObjectURL(blobb);
    var PDF_link = document.createElement('a');
    window.open(pdfUrl, '_blank');*/

  })
}
  ngOnInit(): void{



// Other Browsers


  this.userService.getinformations().subscribe(uss=>{
    this.user=uss;
    this.role=uss.role;
    console.log(uss)
  })
   this.type = FileMimeType.PDF;

    this.service.getAllUserQuestion().subscribe(data=>{
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
      this.service.getAllUserQuestion().subscribe(data=>{
        this.userquestions=data;


      })
    }

  }


}
