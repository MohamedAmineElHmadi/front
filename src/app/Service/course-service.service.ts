import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cours } from '../Entities/cours';
import { lienUtile } from '../Entities/lienUtile';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  url : string = 'http://127.0.0.1:8082/EspritHub/';

  constructor(private http:HttpClient) { }

  public createCourse(cours:Cours){
    return this.http.post(this.url+"course/course",cours)
  }
  public getCourses()
  {
    return this.http.get(this.url+"course/courses")

  }
  public getCourse(id:number)
  {
    return this.http.get(this.url+"course/course/"+id)

  }
  public deleteCourse(id:number){
    return this.http.delete(this.url+"course/course/"+id)
  }
  public updateCourse(cours:Cours,id:number){
    return this.http.put(this.url+"course/course/"+id,cours)
  }

  public assignCourseLu(link:lienUtile,idUe:number){
    return this.http.post(this.url+"course/affecterCourseLu/"+idUe,link)

  }
  public assignCourseLu2(idCours:number,idUe:number){
    return this.http.put(this.url+"course/affecterCourseLu/"+idCours+"/"+idUe, {responseType: 'json'})

  }
}
