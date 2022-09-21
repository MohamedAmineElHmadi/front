import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tag} from "../Entities/tag";
import {Observable} from "rxjs";
import {UserQuestion} from "../Entities/user-question";

@Injectable({
  providedIn: 'root'
})
export class TagServiceService {
  url : string = 'http://127.0.0.1:8082/EspritHub/';

  constructor(private http: HttpClient) { }

  addTag(tag,id){

    return this.http.get(this.url+"tag/addTagAndAffectQuestion",{params:{list:tag,id:id}})
  }


  getQuestionByTag(tag):Observable<UserQuestion[]>{
    return this.http.get<UserQuestion[]>(this.url+"tag/QuestionByTag",{params:{tag:tag}})
  }

  getTeachersQuestionByTag(tag):Observable<UserQuestion[]>{
    return this.http.get<UserQuestion[]>(this.url+"tag/TeacherQuestionByTag",{params:{tag:tag}})
  }

  getSimilarQuestionByTag(tags):Observable<UserQuestion[]>{
    return this.http.get<UserQuestion[]>(this.url+"tag/SimilarQuestionByTags",{params:{tags:tags}})
  }
}
