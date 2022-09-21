import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cours } from '../Entities/cours';
import {Ue} from '../Entities/Ue'

@Injectable({
  providedIn: 'root'
})
export class UeServiceService {
  url : string = 'http://127.0.0.1:8082/EspritHub/';

  constructor(private http:HttpClient) { }

  public createUe(ue:Ue){
    return this.http.post(this.url+"Ue/Ue",ue)
  }
  public getUes()
  {
    return this.http.get(this.url+"Ue/Ues")

  }
  public getUe(id:number)
  {
    return this.http.get(this.url+"Ue/Ue/"+id)

  }
  public deleteUe(id:number){
    return this.http.delete(this.url+"Ue/Ue/"+id)
  }
  public updateUe(ue:Ue,id:number){
    return this.http.put(this.url+"Ue/Ue/"+id,ue)
  }
  
  public assignCourseUE(cours:Cours,idUe:number){
    return this.http.post(this.url+"Ue/affecterCourseUE/"+idUe,cours)

  }
  public assignCourseUE2(idCours:number,idUe:number){
    return this.http.put(this.url+"Ue/affecterCourseUE/"+idCours+"/"+idUe, {responseType: 'json'})

  }
}
