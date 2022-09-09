<template>
<div class="container">
    <van-nav-bar title="搜索想寻找的商品">
      <van-icon slot="left">
        <router-link to="/home">
          <van-icon name="arrow-left" />
        </router-link>
      </van-icon>
    </van-nav-bar>
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @cancel="onCancel"
        @input="select"
      />
    </form>
    <!-- <div class="cards-img">
      <div class="cards" v-for="item in movies" :key="item.id">
        <div @click="toProductDetail(item.id)">
          <img :src="item.src" alt />
        </div>
        <span v-html="item.name"></span>
      </div>
    </div>
    <div class="list"> -->
            <ul class="cart-main-list-item" :key="index" v-for="(item,index) in movies" @click="toProductDetail(item.id)">
              <li class="cart-main-list-item-section">
                <img class="cart-main-list-item-image" :src="item.src" alt />
                <span class="cart-main-list-item-handle">
                  <span class="cart-main-list-item-handle-name" v-html="item.name"></span>
                  <span class="cart-main-list-item-handle-gongnneg">共{{item.gongneng}}</span>
                  <span class="cart-main-list-item-handle-price">￥{{item.price}}</span>
                </span>
              </li>
            </ul>
  </div>
</template>


<script>
// import searchlist from "./Search/Searchlist";
// import searchmain from "./Search/Searchmain";
import { Search } from 'vant';
import { Toast } from "vant";
import axios from "../api/index";
export default {
  data() {
    return {
      value:'',
      movies:[],
      shangpinliebiao:[]
    };
  },
  methods: {
    onCancel() {
      this.value = "";
    },
    select() {
      if (this.value == "") {
        this.movies = [];
        return;
      }
      this.movies = this.shangpinliebiao.filter(item => {
        return item.name.includes(this.value);
      });
      if (this.movies.length == 0) {
        Toast({
          message: "暂无数据",
          icon: "warning"
        });
      }
    },
     backtoOne(){  
        this.$router.back(-1);
      },
      toProductDetail(projectId){
      this.$router.push("/productDetail/"+projectId);
    }
  },
  created(){
       axios.get('/shangpinliebiao/list').then(result => {
      if (parseInt(result.code) === 0) {
        this.shangpinliebiao = result.data;
        }
    })
  }
};
</script>

<style>
.cart-main-list-item-handle{
  height: 1rem !important;
  margin-top: 0.4rem
}
.cart-main-list-item-handle-gongnneg{
  font-size: 0.25rem;
}
.van-cell{
  height: 0.6rem;
  font-size: 0.3rem !important;
}
.van-field__control{
  margin-left: 0.22rem !important;
}
.van-field__left-icon .van-icon{
  margin-top: 0.15rem !important;
  font-size: 0.36rem !important;
}
.van-search__action{
   font-size: 0.32rem !important;
}
.van-nav-bar__title{
  margin: 0.12rem auto !important;
  font-size: 0.28rem !important;
}
.van-toast{
  height: 2rem !important;
  width: 2rem !important;
  widows: 2rem !important;
  font-size: 0.3rem !important;
}
</style>