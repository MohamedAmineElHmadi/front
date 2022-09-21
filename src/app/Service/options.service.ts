import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Option } from '../Entities/options';


@Injectable({
  providedIn: 'root'
})
export class OptionsService {
  url : string = 'http://localhost:8082/EspritHub/options/';
  option: Option
  constructor(private http: HttpClient) { }

  getOptions()
  {
    return this.http.get<Option[]>(this.url+"list");
  }
  delete(id:number){


    return this.http.delete(this.url+"delete/"+id);
  }
  findbyId(id:number){

    return this.http.get<Option>(this.url+"findById/"+id);

  }
  saveOption(options:Option ){
    return this.http.post<Option>(this.url+"save/", options);

  }
}
