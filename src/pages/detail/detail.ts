import { Component } from '@angular/core';
import { IonicPage, NavController,ModalController, NavParams } from 'ionic-angular';
import { MyHttpService } from '../../app/utility/service/myhttp.service';
import { SpecPage } from '../spec/spec';
import { CartPage } from '../cart/cart';
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
  detail:any="";
  detailImg:Array<any>=[];
  carouselImg:Array<any>=[];
  isLike:boolean=false;
  constructor(public modalCtrl:ModalController,public myHttp:MyHttpService, public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    let pid=this.navParams.get("pid");//获得商品ID
    console.log("商品ID:"+pid);
    this.getDetail(pid);
  }
  getDetail(id){
    this.myHttp.sendRequest("assets/json/products.json").subscribe(result=>{
      for(var item of result){
        if(item.pid==id){
          this.detail=item;
          console.log(this.detail)
        }
      }
      this.carouselImg=this.detail.imgs.carousel; //获取轮播banner图
      this.detailImg=this.detail.imgs.detail_img;//获取商品详情图
      console.log( this.carouselImg)
    })
  }
  toggleLike(){
     this.isLike=!(this.isLike);
  }
  addCart(){
    //显示一个模态窗口
    let myModal = this.modalCtrl.create(SpecPage,{"product":this.detail});//传值到下单模态窗
    myModal.present();
  }
  jumpToCart(){
    this.navCtrl.push(CartPage);
  }
}
