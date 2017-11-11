import { Component } from '@angular/core';
import { IonicPage,ModalController, NavController, NavParams } from 'ionic-angular';
import {PayPage} from '../pay/pay'

/**
 * Generated class for the OrderConfirmPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-order-confirm',
  templateUrl: 'order-confirm.html',
})
export class OrderConfirmPage {

  constructor(public modalCtrl:ModalController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderConfirmPage');
  }

  pay(){
    //显示一个模态窗口
    let myModal = this.modalCtrl.create(PayPage);
    myModal.present();
  }

}
