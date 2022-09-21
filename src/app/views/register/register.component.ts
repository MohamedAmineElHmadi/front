import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Entities/user';
import { Router } from '@angular/router';

import {AuthService} from "src/app/Service/auth.service"
import {QuestionServiceService} from "../../Service/question-service.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit{
  user:User;
  srcImage:String;
  uploadedImage: File;
  constructor(private register:AuthService ,private router : Router,private service:QuestionServiceService) {
    this.user = new User();
  }

  save(){
    this.user.image=sessionStorage.getItem("image")
    this.register.SaveUser(this.user).subscribe();
    this.router.navigate(["/login"]);
  }

  downloadImage(name){
    this.service.DownloadImage(name).subscribe(src=>{
      this.srcImage=src;
      console.log(src);
    })
  }

  onimageChanged(event){
    let reader = new FileReader();
    // when the load event is fired and the file not empty
    if(event.target.files && event.target.files.length > 0) {
      // Fill file variable with the file content
      this.uploadedImage = event.target.files[0];
    }
    const imageFormData = new FormData();
    imageFormData.append('imageFile', this.uploadedImage, this.uploadedImage.name);
    console.log( this.uploadedImage.name);
    this.service.UploadImage(imageFormData).subscribe(data=>{
      console.log(data);
      sessionStorage.setItem("image",data);
      this.downloadImage(data);
    })
  }
  ngOnInit() :void {
    console.log(this.user);
    this.downloadImage("avatar.jpg");
  }
}
