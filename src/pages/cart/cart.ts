import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams } from 'ionic-angular';
import { MyHttpService } from '../../app/utility/service/myhttp.service';
import { OrderConfirmPage } from '../order-confirm/order-confirm';
/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  cartList:Array<any>=[];
  totalPrice:number=0;
  isAllSel:boolean=false;  //是否全选
  orderConfirmPage:any="";
  constructor(public alertCtrl:AlertController,  public myhttpCtrl:MyHttpService, public navCtrl: NavController, public navParams: NavParams) {
    this.orderConfirmPage=OrderConfirmPage
  }
  ionViewWillEnter(){
    this.getCartList();
  }
  getCartList(){
    this.myhttpCtrl.sendRequest("assets/json/products.json")
    .subscribe((result:any)=>{
      //生成一个随机数
      // let num=parseInt(Math.random()*(result.length));
      let num=4;
      console.log(num)
      this.cartList=[];
      for(var i=0;i<num;i++){
       this.cartList.push(result[i]);
       this.cartList[i].count=1;
       this.cartList[i].select=false;
      }
    })
  }
  // 总价数组求和方法
  getSum(){
    this.totalPrice=0;
    let selectCount=0;
    for(var i=0;i<this.cartList.length;i++){
      if(this.cartList[i].select){
        this.totalPrice+=parseFloat(this.cartList[i].price)*this.cartList[i].count;
        selectCount++;
        if(selectCount==this.cartList.length){
          this.isAllSel=true
        }
      }
      else{
        this.isAllSel=false;
      }
    }
    console.log(this.totalPrice);
  }
  calCount(index:number,isAdd:boolean,pid:number){
    if(!isAdd){
       if(this.cartList[index].count>1){
      this.cartList[index].count--
    }
      else if(this.cartList[index].count==1){
        this.alertCtrl.create({
          title:"温馨提醒",
          message:"您要删除该商品吗?",
          buttons:[
            {
              text:"删除",
              handler:()=>{
                this.cartList[index].count--;
                this.delPro(index);
              }
            },
            {
              text:"取消",
              role:"cancel",
              handler:()=>{}
            }
          ]
        }).present()
      }
    }
    else {this.cartList[index].count++;}
    this.getSum()
  }
  // 删除商品
  delPro(index){
    console.log(index)
    this.cartList.splice(index,1);
    console.log(this.cartList);
    this.myhttpCtrl.showToast("删除成功");
    this.getSum()
  }
  // 判断是否全选
  allSel(){
    if(this.isAllSel){
      console.log("全选")
      for(var i=0;i<this.cartList.length;i++){
        this.cartList[i].select=true;
        console.log("执行选择")  
      }
    }
    else{
      for(var j=0;j<this.cartList.length;j++){
        this.cartList[j].select=false;
      }
    }
    this.getSum()
  }
}
