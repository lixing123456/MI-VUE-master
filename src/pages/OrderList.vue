<template>
  <div class="settingContainer">
    <div class="commonHeader">
      <img @click="toBack()" src="../assets/images/turnBack.png" alt />
      <div class="commontitle">商品订单</div>
    </div>

    <div class="tab">
      <van-tabs v-model="type" class="tabList">
        <van-tab title="待付款" :class="{active:type==0}" @click="changeType(0)">
          <div class="list" v-if="this.shoppingList.length">
            <ul class="cart-main-list-item" :key="index" v-for="(item,index) in shoppingList">
              <li class="cart-main-list-item-section">
                <img
                  class="cart-main-list-item-image"
                  :src="item.src"
                  @click="toProductDetail(item.id)"
                />
                <span class="cart-main-list-item-handle">
                  <span class="cart-main-list-item-handle-name" v-html="item.name"></span>
                  <span class="cart-main-list-item-handle-gongnneg">共{{item.gongneng}}</span>
                  <span class="cart-main-list-item-handle-price">￥{{item.price}}</span>
                  <span class="cart-main-list-item-handle-number">已经加入购物车{{item.collectState}}件</span>
                </span>
              </li>
            </ul>
          </div>
          <div class="listContainer" v-else>
            <div class="content"></div>
            <div class="emptyBox">
              <img src="../assets/images/empty.png" alt />
              <p class="title">您还没有 订单</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="已付款" :class="{active:type==1}" @click="changeType(1)">
          <div class="list" v-if="this.buyShoppingList.length">
            <ul class="cart-main-list-item" :key="index" v-for="(item,index) in buyShoppingList">
              <li class="cart-main-list-item-section">
                <img
                  class="cart-main-list-item-image"
                  :src="item.src"
                  @click="toProductDetail(item.id)"
                />
                <span class="cart-main-list-item-handle">
                  <span class="cart-main-list-item-handle-name" v-html="item.name"></span>
                  <span class="cart-main-list-item-handle-price">￥{{item.price}}</span>
                  <van-tag type="primary">正在为您尽快发货</van-tag>
                  <van-tag type="danger" class="danger" @click="deletePayData(item,index)">取消订单</van-tag>
                  <van-dialog
                    v-model="show"
                    show-cancel-button
                    >
                  </van-dialog>
                </span>
              </li>
            </ul>
          </div>
          <div class="listContainer" v-else>
            <div class="content"></div>
            <div class="emptyBox">
              <img src="../assets/images/empty.png" alt />
              <p class="title">您还没有 订单</p>
            </div>
          </div>
        </van-tab>
      </van-tabs>
      <!-- <ol class="tab">
         <li>
           <a :class="{active:type==0}" @click="changeType(0)" href="javascript:;">全部</a>
        </li> 
         <li>
          <a :class="{active:type==1}" @click="changeType(1)" href="javascript:;">待付款</a>
        </li> 
        <li>
          <a :class="{active:type==2}" @click="changeType(2)" href="javascript:;">待收货</a>
        </li> 
      </ol>-->
      <!-- <div class="listContainer">
         <div class="content"></div>
        <div class="emptyBox">
          <img src="../assets/images/empty.png" alt />
          <p class="title">您还没有 订单</p>
        </div>
      </div>-->
    </div>

    <!-- <MayBeLikeList></MayBeLikeList> -->
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
</template>

<script>
import MayBeLikeList from "./components/MayBeLikeList";
import { Tag } from "vant";
import { Tab, Tabs } from "vant";
import axios from "../api/index";
import { Dialog } from "vant";
export default {
  components: {
    MayBeLikeList
  },
  data() {
    return {
      show: false,
      type: 0,
      shoppingList: [],
      shangpinliebiao: [],
      buyShoppingList: []
      // ab:[]
    };
  },
  methods: {
    toBack() {
      // window.history.go(-1);
      this.$router.push("/myself");
    },
    changeType(typeIndex) {
      this.type = typeIndex;
    },
    toProductDetail(projectId) {
      this.$router.push("/productDetail/" + projectId);
    },
    getData() {
      axios.get("/product/selectList").then(result => {
        if (parseInt(result.code) === 0) {
          this.shoppingList = result.data;
        }
      });
    },
    getPayData() {
      axios.get("/product/payList").then(result => {
        if (parseInt(result.code) === 0) {
          this.buyShoppingList = result.data;
        }
      });
    },
    deletePayData(item, index) {
      // Dialog.setDefaultOptions({
      //   "width":"5rem",
      //   "hight":"2rem",
      //   "font-size": "0.3rem"
      // }),
      Dialog.confirm({
        title: "提示框",
        message: "确认取消订单吗",
      })
        .then(() => {
          this.buyShoppingList.splice(index, 1);
          axios
            .post("/product/update", {
              id: item.id,
              name: item.name,
              desc: item.desc,
              price: item.price,
              payState: 0
            })
            .then(result => {
              if (parseInt(result.code) === 0) {
                console.log(result, "+++++++");
              }
            });
        })
        .catch(() => {
          // on cancel
        });
    }
  },
  created() {
    axios.get("/shangpinliebiao/list").then(result => {
      if (parseInt(result.code) === 0) {
        this.shangpinliebiao = result.data;
      }
    });
  },
  mounted() {
    if (this.$route.params.index) {
      this.type = this.$route.params.index;
    }
    this.getData();
    this.getPayData();
  }
};
</script>

<style lang='less'>
.settingContainer {
  padding-top: 1rem;
  .commonHeader {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    height: 1rem;
    background: #f2f2f2;
    color: #666;
    padding: 0;
    img {
      width: 0.6rem;
      height: 0.6rem;
      display: block;
      margin: 0 0.2rem;
    }
    .commontitle {
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      text-align: center;
      font-size: 0.3rem;
    }
  }
  .tab {
    border-bottom: 0.01rem solid #ececec;
    // position: fixed;
    width: 100%;
    background: #fff;
    z-index: 2;
    margin: 0;
    padding: 0;
    .tabList {
      height: auto;
      .active {
        height: 100%;
      }
    }

    // li {
    //   display: inline-block;
    //   width: 50%;
    //   text-align: center;
    //   padding: 0 !important;
    //   a {
    //     color: #3c3c3c;
    //     font-size: 0.26rem;
    //     padding: 0 0.1rem;
    //     display: inline-block;
    //     line-height: 0.6rem;
    //   }
    // }
    // li a.active {
    //   color: #ff6700;
    //   border-bottom: 1px solid #ff6700;
    // }
    // li:after {
    //   display: none;
    // }
  }
  .listContainer {
    padding-top: 0.6rem;
    padding-bottom: 0.3rem;
    color: rgba(60, 60, 60, 0.87);
    .emptyBox {
      font-size: 0.3rem;
      text-align: center;
      color: #999;
      margin: 0.8rem 1rem 0;
      img {
        width: 2rem;
        height: 2rem;
      }
      p {
        margin-top: 0.3rem;
      }
    }
  }
  .cart-main-list-item-handle-gongnneg {
    font-size: 23px;
  }
  .goods-info-detail {
    margin-left: 1rem !important;
  }
  .van-tag {
    font-size: 0.22rem;
  }
  .van-tab {
    font-size: 0.3rem;
  }
  .danger {
    margin-left: 0.5rem;
  }
  .van-tabs--line .van-tabs__wrap {
    height: 0.5rem;
  }
  .cart-main-list-item-handle-price {
    margin-bottom: -0.1rem;
  }
  .cart-main-list-item-handle {
    margin-top: 0.2rem;
  }
}
.van-dialog{
  width: 70% !important;
  height: 20% !important;
  font-size: 0.35rem !important;
}
.van-dialog__message{
  font-size: 0.3rem !important;
}
.van-dialog__message--has-title{
  padding-top: 0.35rem !important
}
.van-button{
   font-size: 0.3rem !important;
}
</style>