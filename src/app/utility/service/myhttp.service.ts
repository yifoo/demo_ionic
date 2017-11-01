import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MyHttpService {
  constructor(private http: Http) { }
  sendRequest(Url:any){
    return this.http.get(Url).map((response:Response)=>{
      return response.json();
    })
  }
  // sendRequest(Url){
  //   return this.http.get(Url,{withCredentials:true})
  //   .map((response:Response)=>{
  //     return  response.json();
  //   });
  // }
}