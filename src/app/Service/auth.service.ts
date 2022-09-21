import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../Entities/user';
import {tap} from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";
import {resolveFileWithPostfixes} from "@angular/compiler-cli/ngcc/src/utils";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url : string = 'http://localhost:8082/EspritHub/';
  helper = new JwtHelperService();
  decodedToken: any;
  tokenCheck:any;
  constructor(private http: HttpClient) { }
  loginuser(u:User){
         const payload = new HttpParams()
          .set('email', u.email)
         .set('password', u.password);
    return  this.http.post<any>(this.url+"login",payload).pipe(
      tap(response =>
        localStorage.setItem("token",response.access_token)


      )
    )
  }

  SaveUser(u:User){
    return this.http.post(this.url+"registration",u,{responseType: 'text'});
  }


getRole(){
  this.tokenCheck=localStorage.getItem("token")
  if(this.tokenCheck=="undefined"){
    return "user not found"
  }

    this.decodedToken=this.helper.decodeToken(localStorage.getItem("token"))
    return this.decodedToken.roles
  }



  logout(){
      localStorage.removeItem("token");
    }

  // auth guard
  Adminloggedin(){
    if(this.getRole()=="user not found"|| this.getRole()==null ){
      return false;
    }
    if((this.getRole()=="admin") && !!localStorage.getItem("token")){
      return  true;
    }
    else{return false}
  }
  userLoggedin(){
    if(this.getRole()=="user not found"|| this.getRole()==null){
      return false;
    }
    if(((this.getRole()=="user") ||(this.getRole()=="teacher")) && !!localStorage.getItem("token")){
      return  true;
    }
    else{return false}
  }

}
