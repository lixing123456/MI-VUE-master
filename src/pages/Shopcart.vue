<template>
  <div class="Shopcart">
    <div class="cart-header">
      <span class="iconfont icon-sousuo" @click="toSearch()"></span>
      <h2
        class="cart-header-title"
        style="    line-height: 1rem;
    text-align: center;
    margin: 0 auto;
    font-size: .3rem;
    font-weight: 500;"
      >购物车</h2>
    </div>

    <div class="cart-main">
      <div v-if="hasdata==1" class="cart-main-list">
        <ul class="cart-main-list-item" :key="index" v-for="(item,index) in shoppingList">
          <li class="cart-main-list-item-section">
            <span
              class="cart-main-list-item-check"
              :class="{active:item.isSelect}"
              @click="selectgoods(item)"
            ></span>
            <img class="cart-main-list-item-image" :src="item.src" alt />
            <span class="cart-main-list-item-handle">
              <span class="cart-main-list-item-handle-name" v-html="item.name"></span>
              <span class="cart-main-list-item-handle-price">￥{{item.price}}</span>
              <span class="cart-main-list-item-handle-number">
                <span class="cart-main-list-item-handle-number-operate">
                  <span class="iconfont icon-jian" @click="numChange(item,-1)"></span>
                  <span class="amount" v-text="item.collectState"></span>
                  <span class="supnum iconfont icon-jia" @click="numChange(item,1)"></span>
                </span>
                <span
                  class="delete iconfont icon-shanchu-copy-copy"
                  @click="deletegoods(item,index)"
                  style="font-size: .38rem;
                color: darkgrey;"
                ></span>
              </span>
            </span>
          </li>
        </ul>
        <div class="prompt">
          <p>温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</p>
        </div>
      </div>

      <div v-if="hasdata==2" class="cart-main-list-appendix">
        <span class="empty-cart">购物车还是空的</span>
        <router-link to="/homepage" class="gotomain">去逛逛</router-link>
      </div>

      <div class="cart-main-another">
        <div class="lovely-promote">
          <img src="../assets/images/gessulike.jpg" alt />
        </div>
        <!-- <div class="cart-main-another-list">
          <div
            class="cart-main-another-list-item"
            :key="index"
            v-for="(item,index) in likeList"
            style="width: 49.3%;"
          >
            <a href="javascript:;">
              <div class="goods-img-box" >
                <img :src="item.images" alt />
              </div>
              <div class="goods-info">
                <div class="goods-info-detail" v-html="item.title"></div>
                <span>￥{{item.money}}</span>
              </div>
            </a>
          </div>
        </div>-->
        <div class="cart-main-another-list">
          <div
            class="cart-main-another-list-item"
            :key="item.id"
            @click="toProductDetail(item.id)"
            v-for="item in shangpinliebiao"
          >
            <div class="goods-img-box">
              <img :src="item.src" alt />
            </div>
            <div class="floor-looper-item-content-show-info">
              <div class="goods-info-detail" v-html="item.name"></div>
              <div class="goods-info-detail" v-html="'￥'+item.price"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cart-foot">
      <div class="cart-foot-all">
        <span
          class="cart-foot-all-button"
          :class="{active:allSelect}"
          @click="selectall(shoppingList)"
        ></span>
        <span>全选</span>
      </div>
      <div class="cart-foot-count">
        <span>合计：</span>
        <span class="cart-foot-count-number">
          ￥
          <span>{{this.sum}}</span>
        </span>
      </div>
      <div class="cart-foot-account" @click="Settlement()">结算</div>
    </div>
  </div>
</template>

<script>
import axios from "../api/index";
import { Dialog } from "vant";
export default {
  components: {},
  data() {
    return {
      shangpinliebiao: [],
      hasdata: 2,
      shoppingList: [
        // {
        //     "id":1,
        //     "name":"Redmi Note 8",
        //     "desc":"800万全场景四摄 / 前置1300万美颜相机 / 骁龙665处理器 / 4000mAh超长续航 / 标配18W快充 / 超线性扬声器 / 90%高屏占比 / 康宁大猩猩保护玻璃 / 6.3英寸水滴全面屏",
        //     "price":"9999",
        //     "collectState":"5",
        //     "src":'../.././assets/images/home/good/good1.jpg',
        //     "state":0,
        //     "isSelect": false
        // }
      ],
      // likeList: [
      //   {
      //     images: "../assets/images/item1.jpg",
      //     title: "AirPOP防雾霾口罩",
      //     money: 349
      //   },
      //   {
      //     images: "../assets/images/item2.jpg",
      //     title: "小米手环4复联限量版",
      //     money: 299
      //   },
      //   {
      //     images: "../assets/images/phone4.jpg",
      //     title: "Redmi Note 7 Pro",
      //     money: 1199
      //   },
      //   {
      //     images: "../assets/images/tv.jpg",
      //     title: "小米电视4S 75英寸",
      //     money: 6999
      //   },
      //   {
      //     images: "../assets/images/item2.jpg",
      //     title: "小米手环4复联限量版",
      //     money: 299
      //   },
      //   {
      //     images: "../assets/images/phone4.jpg",
      //     title: "Redmi Note 7 Pro",
      //     money: 1199
      //   }
      // ],
      allSelect: false,
      sum: 0
    };
  },
  // beforeMount() {
  //   this.getData();
  // },
  created() {
    axios.get("/shangpinliebiao/list").then(result => {
      if (parseInt(result.code) === 0) {
        this.shangpinliebiao = result.data;
      }
    });
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get("/product/selectList").then(result => {
        if (parseInt(result.code) === 0) {
          console.log(result, "++++");
          this.hasdata = result.data.length > 0 ? 1 : 2;
          this.shoppingList = result.data;
        }
      });
    },
    selectgoods(item) {
      item.isSelect = !item.isSelect;
      this.allSelect = false;
      let sum = item.price * item.collectState;
      if (item.isSelect == true) {
        this.sum = this.sum + item.price * item.collectState;
      }
      if (item.isSelect == false) {
        this.sum = this.sum - item.price * item.collectState;
      }
    },
    getSum(shoppingList) {
      let sum = 0;
      for (let i = 0; i < shoppingList.length; i++) {
        sum += shoppingList[i].price * shoppingList[i].collectState;
      }
      return sum;
    },
    selectall(shoppingList) {
      if (this.shoppingList.length > 0) {
        this.allSelect = !this.allSelect;
        for (let i = 0; i < this.shoppingList.length; i++) {
          this.shoppingList[i].isSelect = this.allSelect;
        }
        this.sum = this.getSum(this.shoppingList.filter(v => v.isSelect));
      }
    },
    numChange(item, i) {
      const num = parseFloat(item.collectState) + parseFloat(i);
      if (num > 0) {
        item.collectState = num;
        this.sum = this.getSum(this.shoppingList.filter(v => v.isSelect));
        axios
          .post("/product/update", {
            id: item.id,
            name: item.name,
            desc: item.desc,
            price: item.price,
            collectState: parseFloat(item.collectState + i)
          })
          .then(result => {
            if (parseInt(result.code) === 0) {
              item.collectState = parseFloat(item.collectState + item);
            }
          });
      }
      if (num <= 0) {
        this.deletegoods(item, this.shoppingList.indexOf(item));
      }
    },
    deletegoods(item, index) {
      Dialog.setDefaultOptions({
        width: "5rem",
        hight: "2rem",
        "font-size": "0.3rem"
      }),
        Dialog.confirm({
          title: "标题",
          message: "确认从购物车删除吗"
        })
          .then(() => {
            this.shoppingList.splice(index, 1);
            this.sum = this.getSum(this.shoppingList.filter(v => v.isSelect));
            if (this.shoppingList.length === 0) {
              this.allSelect = false;
            }
            axios
              .post("/product/update", {
                id: item.id,
                name: item.name,
                desc: item.desc,
                price: item.price,
                collectState: 0
              })
              .then(result => {
                if (parseInt(result.code) === 0) {
                  console.log(result, "+++++++");
                  if (this.shoppingList.length <= 0) {
                    this.hasdata = 2;
                  }
                }
              });
          })
          .catch(() => {
            // on cancel
          });
    },
    Settlement() {
      if (this.sum !== 0) {
        this.$router.push("paylist");
      }
    },
    toSearch() {
      this.$router.push("/search");
    },
    toProductDetail(projectId) {
      this.$router.push("/productDetail/" + projectId);
    }
  }
};
</script>

<style>
.empty-cart {
  display: inline-block;
  line-height: 0.8rem;
  background: url(../assets/images/cartnull.daaf7926f8.png) no-repeat 0;
  background-size: auto 100%;
  padding: 0 0.16rem 0 0.96rem;
  color: rgba(0, 0, 0, 0.27);
  font-size: 0.35rem;
}
.gotomain {
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  height: 0.5rem;
  line-height: 0.5rem;
  padding: 0 0.24rem;
  color: rgba(0, 0, 0, 0.87);
  font-style: normal;
  font-size: 0.2rem;
}
.cart-main-list-appendix {
  text-align: center;
}
.goods-info-detail {
  margin-left: 1rem !important;
}
.prompt {
  font-size: 0.25rem !important;
}
.cart-main-list-item-section {
  padding-bottom: 0.2rem !important;
  padding-left: 0.2rem !important;
}
</style>