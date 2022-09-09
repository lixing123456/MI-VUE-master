<template>
  <div class="Surepay">
    <div class="Surepay-head">
      <i
        class="iconfont icon-you"
        style="margin-left: .2rem;
        position: unset;
        right: 2.5rem;
        font-size: .35rem;"
        @click="backtobefore()"
      ></i>
      <span class="Surepay-head-title">
        <i
          class="iconfont icon-umidd17"
          style="color: deepskyblue;
            vertical-align: top;
            font-size: .44rem;
            margin-right: .1rem;"
        ></i>确认付款
      </span>
      <i
        class="iconfont icon-question"
        style="
        color: dodgerblue;
        font-size: .34rem;"
      ></i>
    </div>
    <div class="Surepay-main">
      <div class="main-money">￥{{this.Num}}</div>
      <div class="main-list">
        <span class="line-left">收款方</span>
        <span class="line-right">九零电商</span>
      </div>
      <div class="main-list">
        <span class="line-left">订单信息</span>
        <span class="line-right">九零电商515656656565605号订单</span>
      </div>
      <div class="main-list">
        <span class="line-left">付款方式</span>
        <span class="line-right">
          支付宝
          <i class="iconfont icon-you1" style="vertical-align: middle;"></i>
        </span>
      </div>
    </div>
    <div class="Surepay-button">
      <span class="Surepay-button-item" @click="tiaozhuan()">立即付款</span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "../../api/index";
// import chuanzhi from "../../chuanzhi";
export default {
  data() {
    return {
      Num: "",
      shoppingList: [],
      beifen: []
    };
  },
  methods: {
    aaa() {
      console.log(this.shoppingList[1].id, "5555555");
    },
    backtobefore() {
      window.history.go(-1);
    },
    deletegoods(item) {
      // this.shoppingList.splice(index, 1);
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
          }
        });
    },
    tiaozhuan() {
      axios
        .post("/product/change")
        .then(result => {
        });
      // this.shoppingList.forEach(item => {
      //   axios
      //     .post("/product/update", {
      //       id: item.id,
      //       name: item.name,
      //       desc: item.desc,
      //       price: item.price,
      //       payState: item.payState + 1
      //     })
      //     .then(result => {
      //       if (parseInt(result.code) === 0) {
      //         console.log("++++++++++++");
      //       }
      //     });
      // });

      // setTimeout(() => {
      //   this.runToSuccess()
      // }, 100);
      setTimeout(() => {
        this.$router.push("successpay");
      }, 500);
    },
    runToSuccess() {
      this.shoppingList.forEach((item, index) => {
        this.deletegoods(item, index);
      });
       setTimeout(() => {
        this.$router.push("successpay");
      }, 500);
    },
    getData() {
      axios.get("/product/selectList").then(result => {
        if (parseInt(result.code) === 0) {
          this.shoppingList = result.data;
          var sum = 0,
            sunNum = 0,
            l = this.shoppingList.length;
          for (var i = 0; i < l; i++) {
            sum +=
              this.shoppingList[i].price * this.shoppingList[i].collectState;
          }
          this.Num = sum;
        }
      });
    }
  },
  mounted: function() {
    this.getData();
  }
};
</script>

<style>
.Surepay {
  font-size: 25px;
}
</style>