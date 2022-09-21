import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Question} from "../Entities/question";
import {Observable} from "rxjs";
import {UserQuestion} from "../Entities/user-question";
import {Tag} from "../Entities/tag";
import {Ressource} from "../Entities/ressource";

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {
  url : string = 'http://127.0.0.1:8082/EspritHub/';
  url2 : string = 'http://127.0.0.1:5000/api';

  constructor(private http: HttpClient) { }


  profileUser(o,n){
    return this.http.get(this.url2+"/profileU",{responseType:"text",params:{option:o,niveau:n}});
  }

  cencortext(text){
    return this.http.get(this.url2+"/cencor",{responseType:"text",params:{text:text}});
  }
  addQuestion(Q:Question):Observable<Question>{
    return this.http.post<Question>(this.url+"question/addQuestion",Q)
  }
  addQuestionwithRessource(Q:Question,id,idu,idm):Observable<Question>{
    return this.http.post<Question>(this.url+"question/addQuestion",Q,{params:{ress:id,idu:idu,idm:idm}})
  }

  addQuestionwithoutRessource(Q:Question,idu,idm):Observable<Question>{
    return this.http.post<Question>(this.url+"question/addQuestionWRessource",Q,{params:{idu:idu,idm:idm}})
  }
  getAllUserQuestion():Observable<UserQuestion[]>{
    return this.http.get<UserQuestion[]>(this.url+"question/Userquestions")
  }

  getQuestion(id):Observable<UserQuestion>{
    return this.http.get<UserQuestion>(this.url+"question/Userquestion",{params:{id:id}});
  }

  updateAnswerNumber(q:Question){
    return this.http.put(this.url+"question/ResponseNumber",q);
  }

  Like(q:Question,idu){
    return this.http.put(this.url+"question/LikeQuestion",q,{params:{idu:idu}});
  }

  Dislike(q:Question,idu){
    return this.http.put(this.url+"question/DislikeQuestion",q,{params:{idu:idu}});
  }

  CloseQuestion(q:Question){
    return this.http.put(this.url+"question/CloseQuestion",q);
  }

  uploadFile(file: File){
    const formdata: FormData = new FormData();

    formdata.append('file', file);
    return this.http.post(this.url+"question/UploadFile",formdata,{responseType:"text"});

  }

  downloadFile(name){
    return this.http.get(this.url+"question/downloadFile",{ params:{name:name},responseType:"arraybuffer" as 'json'})
  }

  addRessource(R:Ressource){
    return this.http.post(this.url+"question/addRessource",R,{responseType:"text"})
  }

  getTeachersQuestion():Observable<UserQuestion[]>{
    return this.http.get<UserQuestion[]>(this.url+"question/TeachersQuestion");
  }

  getStudentQuestion():Observable<UserQuestion[]>{
    return this.http.get<UserQuestion[]>(this.url+"question/StudentsQuestion");
  }

  DownloadImage(name){

    return this.http.get(this.url+"question/downloadImage",{responseType:"text", params:{name:name}})
  }

  UploadImage(image:FormData){

    return this.http.post(this.url+"question/upload",image,{responseType:"text"})
  }


}
