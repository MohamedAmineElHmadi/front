import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Entities/user';
import {UsersServicesService} from "src/app/Service/users-services.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  listUser:User[];
  aze:string;

  constructor(private userService:UsersServicesService , private route:Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data:User[] )=>this.listUser=data
    )
  }
  delete(id:number){

    this.userService.deleteUser(id).subscribe();
  }
  detail(id:number){


    this.route.navigate(["theme/users/user/"+id])
  }

  test(){
   // console.log("test")
    this.userService.test().subscribe(
      (data:string) => this.aze=data
    );
    console.log(this.aze)
  }

}
