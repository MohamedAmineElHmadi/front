import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Entities/user';
import {AuthService} from "src/app/Service/auth.service"
import { JwtHelperService } from "@auth0/angular-jwt";
import {UsersServicesService} from "../../Service/users-services.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit{
  user:User;
  error:string="Invalid email or password";
  navigate:boolean=true;
  helper = new JwtHelperService();
  decodedToken: any;
  constructor(private loginUser:AuthService , private router : Router,private userservice:UsersServicesService ) {
    this.user = new User();
  }
  ngOnInit() :void {

  }
  login(){
    this.loginUser.loginuser(this.user).
    subscribe(
      res => {
        if (this.loginUser.getRole() == "user not found") {
          localStorage.removeItem("token")
          this.navigate = false;
          this.router.navigate(["/login"])
        }
        else{
          this.userservice.getinformations().subscribe(uss=>{
            console.log(uss);
            sessionStorage.setItem("role",uss.role)
          })
          this.router.navigate(["/question/questions"])
        }
      }


    )
  }

}
