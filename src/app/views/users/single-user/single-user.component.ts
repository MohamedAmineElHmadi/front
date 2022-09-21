import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Entities/user';
import {UsersServicesService} from "src/app/Service/users-services.service";

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {
  keyparam;
  user:User;
  role:any



  constructor(private param:ActivatedRoute,private userService:UsersServicesService) {
    this.param.params.subscribe(query =>{
     this.keyparam=query.id })
   }

  ngOnInit(): void {
    console.log(this.keyparam)
    this.userService.findbyId(this.keyparam).subscribe(
      (data:User)=>this.user=data

    )

  }

  changerole(){
    this.userService.changeRole(this.user,this.keyparam).subscribe();

  }


data(){
  console.log(this.user)
}
/*  getrole(){
   this.role= this.userService.getrole(this.user.id).subscribe(
     (data:any) => this.role = data
   )
    console.log(this.role)
  }*/

}
