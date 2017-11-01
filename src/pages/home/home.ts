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
  constructor(public myhttpCtrl:MyHttpService, public navCtrl: NavController) {
  
  }
  ionViewWillEnter(){
   this.getCarousel();
   this.getNav();
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
}
