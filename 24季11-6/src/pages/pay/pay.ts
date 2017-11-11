import { Component } from '@angular/core';
import {App,LoadingController,ViewController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyHttpService } from '../../app/utility/service/myhttp.service';
import { HomePage } from '../home/home';
/**
 * Generated class for the PayPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pay',
  templateUrl: 'pay.html',
})
export class PayPage {

  constructor(public appCtrl: App,public myhttpCtrl:MyHttpService,public viewCtrl:ViewController,public loadCtrl:LoadingController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayPage');
  }

  showLoading(){
    let myLoad = this.loadCtrl.create({
      content:'支付中'
    })

    myLoad.present();
    setTimeout(
      ()=>{
        myLoad.dismiss(); //关闭加载中窗口
        this.myhttpCtrl.showToast("支付成功,跳转到首页");
        this.viewCtrl.dismiss();//关闭当前模态窗
        setTimeout(()=>{
          this.appCtrl.getRootNav().push(HomePage)
        },500)
      },
      1000);
  }

}
