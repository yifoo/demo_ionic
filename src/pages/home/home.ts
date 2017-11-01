import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyHttpService } from '../../app/utility/service/myhttp.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  carouselPic:Array<any>=[];
  nav:Array<any>=[];
  productList:Array<any>=[];
  loadNum=4;
  loadTip="正在努力的加载中...";
  constructor(public myhttpCtrl:MyHttpService, public navCtrl: NavController) {
  
  }
  ionViewWillEnter(){
   this.getCarousel();
   this.getNav();
   this.getProducts();
  }
  getCarousel(){  
    this.myhttpCtrl.sendRequest("../../assets/json/index_carousel.json")
    .subscribe((data:any)=>{
      console.log(data);
      this.carouselPic=data;
    })
  }
  getNav(){
    this.myhttpCtrl.sendRequest("../../assets/json/index_nav.json")
    .subscribe((data:any)=>{
      console.log(data);
      this.nav=data;
    })
  }
  getProducts(){
    this.myhttpCtrl.sendRequest("../../assets/json/products.json")
    .subscribe((data:any)=>{
      this.productList=data;
    })
  }
  loadMore(infiniteScroll){
    if(this.loadNum<this.productList.length){
      this.loadNum+=2;
      this.getProducts();
    }
    else{
      this.loadTip="没有新内容了";
    }
    setTimeout(()=>{
      infiniteScroll.complete();
    },1000)
      
  }
}
