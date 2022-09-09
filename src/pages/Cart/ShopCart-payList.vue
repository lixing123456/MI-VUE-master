<template>
  <div class="paylist">
    <div class="paylist-header">
      <i class="iconfont icon-you" @click="backtocart()"></i>
      订单配送至
    </div>
    <div class="payList-address">
      <span class="payList-address-detail">
        <span class="detail-name">
          <span class="detail-name-item" v-text="this.name">{{this.name}}</span>
          <!-- <span class="detail-name-phone">10086</span> -->
        </span>
        <span class="detail-address">沧州师范学院</span>
      </span>
      <span class="little-icon">
        <i class="iconfont icon-you1"></i>
      </span>
    </div>
    <!-- <div class="payList-menu">
      <div class="payList-menu-all">
        <div class="payList-menu-detail-goods">
          <div class="payList-menu-detail-goods-item">
            <img src="../../../public/assets/images/mobile2.jpg" alt />
            <span class="goods-word-title">小米CC 9e 全网通版 4GB+128GB 白色恋人 128GB</span>
            <strong class="goods-value">1199.00</strong>
          </div>
          <div class="payList-menu-detail-goods-item">
            <img src="../../../public/assets/images/mobile2.jpg" alt />
            <span class="goods-word-title">小米CC 9e 全网通版 4GB+128GB 白色恋人 128GB</span>
            <strong class="goods-value">1199.00</strong>
          </div>
          <div class="payList-menu-detail-goods-item">
            <img src="../../../public/assets/images/mobile2.jpg" alt />
            <span class="goods-word-title">小米CC 9e 全网通版 4GB+128GB 白色恋人 128GB</span>
            <strong class="goods-value">1199.00</strong>
          </div>
        </div>
        <span class="payList-menu-all-number">共5件</span>
      </div>
      <ul class="payList-menu-detail">
        <li>
          <span>商品总价</span>
          <span>￥2000</span>
        </li>
        <li>
          <span>运费</span>
          <span>包邮</span>
        </li>
        <li>
          <span>优惠券</span>
          <span>无可用</span>
        </li>
        <li>
          <span>礼品卡</span>
          <span>无可用</span>
        </li>
        <li class="Subtotal">
          <span>小计</span>
          <span>￥2000</span>
        </li>
        <li>
          <span>发票</span>
          <span>电子发票</span>
        </li>
      </ul>
    </div> -->
    <div class="payList-menu">
      <div class="payList-menu-all">
       <div class="cart-main">
      <div  class="cart-main-list">
        <ul class="cart-main-list-item" :key="index" v-for="(item,index) in shoppingList">
          <li class="cart-main-list-item-section">
            <img class="cart-main-list-item-image" :src="item.src" alt />
            <span class="cart-main-list-item-handle">
              <span class="cart-main-list-item-handle-name" v-html="item.name"></span>
              <span class="cart-main-list-item-handle-price">￥{{item.price}}</span>
              <span class="cart-main-list-item-handle-number">
                <span class="cart-main-list-item-handle-number-operate">
                  <span class="amount">共{{item.collectState}}件</span>
                </span>
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
        <span class="payList-menu-all-number" >共{{this.shoppingList.length}}种商品</span>
      </div>
      <!-- <ul class="payList-menu-detail">

        <li>
          <span>运费</span>
          <span>包邮</span>
        </li>
        <li>
          <span>优惠券</span>
          <span>无可用</span>
        </li>
        <li>
          <span>礼品卡</span>
          <span>无可用</span>
        </li>
        <li>
          <span>发票</span>
          <span>电子发票</span>
        </li>
      </ul> -->
      <div class="payList-money">
      <div class="payList-money-detail">
        <span class="payList-money-detail-word">共{{this.num}}件,应付金额：</span>
        <span class="payList-money-detail-money">￥{{this.priceNum}}</span>
      </div>
      <div class="gotopaid">
        <a @click="runtopay()">去付款</a>
      </div>
    </div>
    </div>
   
    
  </div>
</template>

<script>
import axios from "../../api/index";
// import chuanzhi from '../../chuanzhi'
export default {
  data() {
    return {
      shoppingList:[],
      priceNum:'',
      num:'',
      name:''
    };
  },
  methods: {
    backtocart() {
      window.history.go(-1);
    },
    runtopay(){
      // chuanzhi.$emit('val', this.priceNum)
      this.$router.push('surepayfa/surepay')
    },
    getData() {
      axios.get("/product/selectList").then(result => {
        if (parseInt(result.code) === 0) {
          this.shoppingList = result.data;
          console.log(result.data,'111111111111111')
          var sum=0, sunNum=0,l=this.shoppingList.length;
            for(var i=0;i<l;i++){
                  sum+=this.shoppingList[i].price*this.shoppingList[i].collectState;
                  sunNum+=Number(this.shoppingList[i].collectState) 
            }  
        this.priceNum=sum;
        this.num=sunNum; 
        }
      });
    }
  },
  beforeMount(){
    this.getData()
  },
  mounted(){
    this.name=localStorage.userName
    console.log( localStorage.userName,'444444')
    }
  
  
};
</script>

<style>
.payList-menu-all-number{
  font-size: 25px;
}
.payList-money{height: 100px;

width: 100%;

background-color: #ddd;

position: fixed;

bottom: 0;}
</style>
