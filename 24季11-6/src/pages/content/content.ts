import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyHttpService } from '../../app/utility/service/myhttp.service';
import {DetailPage} from '../detail/detail';
/**
 * Generated class for the ContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html',
})
export class ContentPage {
  productList:Array<any>=[];
  constructor(public myhttpCtrl:MyHttpService,public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad(){
    this.getProducts();
  }
  getProducts(){
    this.myhttpCtrl.sendRequest("assets/json/products.json")
    .subscribe((result:any)=>{
       this.productList=result;
    })
  }
  jumpToDetail(index){
    var id=this.productList[index].pid;
    this.navCtrl.push(DetailPage,{
      pid:id
    })
  }
}
