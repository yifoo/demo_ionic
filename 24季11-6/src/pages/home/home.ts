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
  detailPage:any="";
  constructor(public myhttpCtrl:MyHttpService, public navCtrl: NavController) {
    this.detailPage=DetailPage
  }
  ionViewDidLoad(){
   this.getCarousel();//获取首页轮播banner
   this.getNav(); //获取导航数据
   this.getAuthor();//获取作者
   this.getProducts();//获取产品数据
  }
  getCarousel(){  
    this.myhttpCtrl.sendRequest("assets/json/index_carousel.json")
    .subscribe((data:any)=>{
      this.carouselPic=data;
    })
  }
  getNav(){
    this.myhttpCtrl.sendRequest("assets/json/index_nav.json")
    .subscribe((data:any)=>{
      this.nav=data;
    })
  }
  getAuthor(){
    this.myhttpCtrl.sendRequest("assets/json/author.json")
    .subscribe((data:any)=>{
      this.authorList=data;
    })
  }
  getProducts(){
    this.myhttpCtrl.sendRequest("assets/json/products.json")
    .subscribe((result:any)=>{
       this.productList=result;
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
    var id=this.productList[index].pid;
    this.navCtrl.push(DetailPage,{
      pid:id
    })
  }
}
