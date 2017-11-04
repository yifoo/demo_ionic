import { Injectable } from '@angular/core';
import { Http, Response,} from '@angular/http';
import {ToastController} from 'ionic-angular'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MyHttpService {
  constructor(public ToastCtrl:ToastController,private http: Http) { }
  sendRequest(Url:any){
    return this.http.get(Url).map((response:Response)=>{
      return response.json();
    })
  }
  showToast(msg){
      let myToast=this.ToastCtrl.create({
        message:msg,
        duration:2000,
        position:'bottom'
      })
      myToast.present();
    }
}