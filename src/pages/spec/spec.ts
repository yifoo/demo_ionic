import { Component } from '@angular/core';
import { ToastController,IonicPage, NavController,ViewController, NavParams } from 'ionic-angular';
import { MyHttpService } from '../../app/utility/service/myhttp.service';
/**
 * Generated class for the SpecPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spec',
  templateUrl: 'spec.html',
})
export class SpecPage {
  product:Array<any>=[];
  count:number=1;
  img:any="";
  constructor(public viewCtrl:ViewController,public toastCtrl:ToastController,public navCtrl: NavController,public myHttp:MyHttpService, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.product=this.navParams.get('product');
    this.img=this.product.imgs.carousel[0];
  }
  //计算购物数量
  calCount(isAdd){
    if(isAdd){
      this.count++;
    }
    else{
      if(this.count>1){
      this.count--;
      }
    }
  }
  showToast(){
    let myToast=this.toastCtrl.create({
      message:"加入成功"
    })
    myToast.present();
    setTimeout(
      ()=>{
        //关闭Toast窗口
        myToast.dismiss();
        //关闭当前模态窗
        this.viewCtrl.dismiss();
      },
      1000);
  }
}
