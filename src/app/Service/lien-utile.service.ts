import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {lienUtile} from '../Entities/lienUtile'
@Injectable({
  providedIn: 'root'
})
export class LienUtileService {
  url : string = 'http://127.0.0.1:8082/EspritHub/';

  constructor(private http:HttpClient) { }

  public createLU(lienUtile:lienUtile){
    return this.http.post(this.url+"lienUtile/lienUtile",lienUtile)
  }
  public getLUs()
  {
    return this.http.get(this.url+"lienUtile/liensUtiles")

  }
  public getLU(id:number)
  {
    return this.http.get(this.url+"lienUtile/lienUtile/"+id)

  }
  public deleteLU(id:number){
    return this.http.delete(this.url+"lienUtile/lienUtile/"+id)
  }
  public updateLU(lienUtile:lienUtile,id:number){
    return this.http.put(this.url+"lienUtile/lienUtile/"+id,lienUtile)
  }
}
