import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyHttpService } from '../../app/utility/service/myhttp.service';
/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  detailList:Array<any>=[];
  detailImg:Array<any>=[];
  constructor(public myHttp:MyHttpService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
    this.getDetail();
    this.getDetailImg();
  }
  getDetailImg(){
    this.myHttp.sendRequest("assets/json/detail_img.json").subscribe(data=>{
      this.detailImg=data;
    })
  }
  getDetail(){
    this.myHttp.sendRequest("assets/json/detail_carousel.json").subscribe(data=>{
      this.detailList=data;
    })
  }

}
