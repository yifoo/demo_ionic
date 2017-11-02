import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyHttpService } from '../../app/utility/service/myhttp.service';
import {DetailPage} from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  carouselPic:Array<any>=[];
  nav:Array<any>=[];
  productList:Array<any>=[];
  authorList:Array<any>=[];
  loadNum=4;
  loadTip="正在努力的加载中...";
  constructor(public myhttpCtrl:MyHttpService, public navCtrl: NavController) {
  
  }
  ionViewWillLoad(){
   this.getCarousel();
   this.getNav();
   this.getAuthor();
   this.getProducts();
  }
  getCarousel(){  
    this.myhttpCtrl.sendRequest("assets/json/index_carousel.json")
    .subscribe((data:any)=>{
      console.log(data);
      this.carouselPic=data;
    })
  }
  getNav(){
    this.myhttpCtrl.sendRequest("assets/json/index_nav.json")
    .subscribe((data:any)=>{
      console.log(data);
      this.nav=data;
    })
  }
  getAuthor(){
    this.myhttpCtrl.sendRequest("assets/json/author.json")
    .subscribe((data:any)=>{
      console.log(data);
      this.authorList=data;
    })
  }
  getProducts(){
    this.myhttpCtrl.sendRequest("assets/json/products.json")
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
  jumpToDetail(index){
    this.navCtrl.push(DetailPage,{
      id:this.productList[index].pid
    })
  }
}
