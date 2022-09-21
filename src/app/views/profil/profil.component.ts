import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Entities/user';
import { Option } from 'src/app/Entities/options';

import { UsersServicesService } from 'src/app/Service/users-services.service';
import { OptionsService } from 'src/app/Service/options.service';
import {QuestionServiceService} from "../../Service/question-service.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  user:User
  options:Option[];

 selectedFile:File=null;
  constructor(private userservice:UsersServicesService,private optionsService:OptionsService,private http:HttpClient,private service:QuestionServiceService) { }

  ngOnInit(): void {
   this.userservice.getinformations().subscribe(
      (data:User) => this.user=data)
   this.optionsService.getOptions().subscribe(
      (data:Option[]) => this.options=data)


  }
  updateprofil(){
    this.userservice.update(this.user,this.user.id).subscribe()
  }
  onfilselected(event){
    this.selectedFile=<File>event.target.files[0];
  }

  changePhoto(){
    const fd=new FormData();
    //fd.append('File',this.selectedFile)
 // this.http.post('http://localhost:8080/EspritHub/user/insertImage/'+this.user.id,fd).subscribe()


    let reader = new FileReader();
    // when the load event is fired and the file not empty

    const imageFormData = new FormData();
    imageFormData.append('imageFile', this.selectedFile, this.selectedFile.name);
    console.log( this.selectedFile.name);
    this.service.UploadImage(imageFormData).subscribe(data=>{
      console.log(data);
      sessionStorage.setItem("image",data);
     // this.downloadImage(data);
    })
    this.userservice.updateImage(this.user,sessionStorage.getItem("image")).subscribe();
  }

  getoption(e){
this.user.option=e.target.value
    console.log(this.user.option)
  }
}
