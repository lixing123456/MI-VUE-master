<template>
  <div class="myselfContent">
    <header>
      <div class="user ui-flex align-center">
        <div class="img">
          <img src="../assets/images/mine/timg.jpg" />
        </div>
        <div class="name" @click="showDialog()" v-text="userName"></div>
        <div class="back" @click="back()">
          <van-button type="default">返回首页</van-button>
        </div>
      </div>
    </header>

    <div class="b1 ui-flex align-center justify-space-between" @click="toMyOrderList(0)">
      <div class="cite">我的订单</div>
      <div class="span ui-flex align-center">
        <a class>全部订单</a>
      </div>
    </div>
    <!-- 三个tab -->
    <ul class="b2 ui-flex align-center justify-space-between">
      <li :key="item.id" v-for="(item,index) in tabList" :class="item.className">
        <a @click="toMyOrderList(index)">
          <div class="icon"></div>
          <span v-html="item.name"></span>
        </a>
      </li>
    </ul>
    <!-- 我的页面列表 -->
    <div v-for="item in homeList" :key="item.id">
      <div class="ui-line"></div>
      <ul class="items">
        <li
          @click="toRouters(itemChild.router)"
          v-for="itemChild in item.children"
          :key="itemChild.id"
          :class="itemChild.childClassName"
        >
          <a>
            <span v-html="itemChild.childName"></span>
          </a>
        </li>
      </ul>
    </div>
    <!-- 同意登录弹出框 -->
    <div v-show="this.dialogShow" class="dialog">
      <div class="dialogContent">
        <div class="contentBox">
          <p>
            <span>《小米商城用户协议》</span>
            <span>《小米商城隐私政策》</span>
          </p>
          <p>
            <span>《小米帐号用户协议》</span>
            <span>《小米帐号隐私政策》</span>
          </p>
          <p>请您仔细阅读以上协议，其中有对您权利义务的特别约定等重要条款，同意后方可使用本软件</p>
        </div>
        <div class="bottomAction">
          <button class="disagree" @click="hideDialog()">不同意</button>
          <button class="agree" @click="hideDialog('agree')">同意</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isLogin: false,
      userName: "登录/注册",
      tabList: [
        {
          id: 1,
          name: "待付款",
          className: "dfk",
          router: ""
        },
        {
          id: 2,
          name: "待收货",
          className: "dah",
          router: ""
        }
      ],
      homeList: [
        {
          id: 20,
          children: [
            {
              id: 10,
              childName: "会员中心",
              childClassName: "i-member",
              router: "/setting"
            },
            {
              id: 11,
              childName: "我的优惠",
              childClassName: "i-wallet",
              router: "/setting"
            }
          ]
        },
        {
          id: 21,
          children: [
            {
              id: 12,
              childName: "服务中心",
              childClassName: "i-service",
              router: "/setting"
            },
            {
              id: 13,
              childName: "用户之家",
              childClassName: "i-mihome",
              router: "/setting"
            }
          ]
        },
        {
          id: 22,
          children: [
            {
              id: 14,
              childName: "我的F码",
              childClassName: "i-fcode",
              router: "/setting"
            },
            {
              id: 15,
              childName: "礼物码兑换",
              childClassName: "i-gift",
              router: "/setting"
            }
          ]
        },
        {
          id: 23,
          children: [
            {
              id: 16,
              childName: "设置",
              childClassName: "i-setting",
              router: "/setting"
            }
          ]
        }
      ],
      dialogShow: false
    };
  },
  mounted() {
    let isLogin = window.localStorage.getItem("isLogin");
    if (isLogin && isLogin == "yes") {
      this.isLogin = true;
      this.userName = window.localStorage.getItem("userName");
    }
  },
  methods: {
    back(){
       this.$router.push("beijing");
    },
    showDialog() {
      if (!this.isLogin) {
        this.dialogShow = true;
      }
    },
    hideDialog(type) {
      this.dialogShow = false;
      if (type) {
        this.$router.push("login");
      }
    },
    //
    toMyOrderList(index) {
        // if (this.isLogin) {
          // this.$router.push("orderList/" + index);
        // } else {
        //   this.$router.push("login");
        // }
        this.$router.push({name:'orderList',params:{
          index:index
        }});

    },
    //列表页跳转路由
    toRouters(router) {
      this.$router.push(router);
    }
  }
};
</script>

<style lang='less'>
.align-center {
  align-items: center;
}
.ui-flex {
  display: flex;
}
.justify-space-between {
  justify-content: space-between;
}
.ui-line {
  height: 0.2rem;
  background: #f5f5f5;
  overflow: hidden;
  clear: both;
}
.b1 {
  background-color: #fff;
  height: 0.8rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  color: rgba(0, 0, 0, 0.54);
  position: relative;
  box-sizing: border-box;
  padding-right: 0.56rem;
  .cite {
    font-size: 0.28rem;
    padding: 0 0 0 0.32rem;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.87);
  }
  a {
    font-size: 0.24rem;
    color: rgba(0, 0, 0, 0.87);
  }
}
.b1:after {
  content: "";
  position: absolute;
  right: 5.12px;
  right: 0.32rem;
  top: 50%;
  width: 3.2px;
  width: 0.2rem;
  height: 3.2px;
  height: 0.2rem;
  border-left: 1px solid currentColor;
  border-top: 1px solid currentColor;
  transform: translate3d(0, -50%, 0) rotate(135deg);
  -webkit-transform: translate3d(0, -50%, 0) rotate(135deg);
}
.b2 {
  box-sizing: border-box;
  padding: 0 0.8rem;
  background-color: #fff;
  li {
    display: flex;
    align-content: space-between;
    position: relative;
    box-sizing: border-box;
    padding: 0.4rem 0;
    .icon {
      width: 0.6rem;
      height: 0.6rem;
      margin: 0 auto 0.16rem;
      background: url(../assets/images/mine/myselefIcon1.png) no-repeat center 0;
      background-size: 100% auto;
    }
    span {
      color: rgba(0, 0, 0, 0.87);
      font-size: 0.3rem;
    }
  }
  .dfk .icon {
    background-image: url(../assets/images/mine/myselefIcon1.png);
  }
  .dah .icon {
    background-image: url(../assets/images/mine/myselefIcon2.png);
  }
  .thx .icon {
    background-image: url(../assets/images/mine/myselefIcon3.png);
  }
}
.myselfContent {
  box-sizing: border-box;
  padding-bottom: 1.04rem;
  header {
    background: url(../assets/images/mine/myselfHeaderBackPic.png) center 0
      #f37d0f;
    background-size: auto 100%;
    box-sizing: border-box;
    padding: 0.32rem 0;
    .ui-flex {
      .img {
        margin: 0 0.16rem 0 0.32rem;
        width: 0.96rem;
        height: 0.96rem;
        overflow: hidden;
        box-sizing: border-box;
        border-radius: 100%;
        border: 3px solid hsla(0, 0%, 100%, 0.4);
        text-align: center;
        img {
          width: auto;
          height: 100%;
          margin: 0 auto;
        }
      }
      .name {
        color: #fff;
        font-size: 0.24rem;
        text-align: left;
      }
     .back{
       margin-left: 3rem !important;
     }
    }
  }
  .dialog {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 999;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .dialogContent {
      width: 6.76rem;
      background: #fff;
      border-radius: 0.1rem;
      overflow: hidden;
      line-height: 0.37rem;
      .contentBox {
        padding: 0.4rem 0.7rem;
        box-sizing: border-box;
        line-height: 0.4rem;
        color: #676767;
        p {
          font-size: 0.24rem;
          span {
            color: #ff6700;
            margin-right: 0.1rem;
          }
        }
      }
    }
    .bottomAction {
      display: flex;
      button {
        flex: 1;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.32rem;
        color: #676767;
        background: none;
        border: none;
        position: relative;
      }
      .disagree:after {
        content: "";
        display: block;
        position: absolute;
        border-right: 1px solid #d9d9d9;
        top: 0;
        right: 0;
        height: 200%;
        transform-origin: right 0;
        transform: scale(0.5) translateZ(0);
      }
      button:before {
        content: "";
        display: block;
        position: absolute;
        border-top: 1px solid #d9d9d9;
        top: 0;
        left: 0;
        width: 200%;
        transform-origin: left 0;
        transform: scale(0.5) translateZ(0);
      }
      .agree {
        color: #ff6700;
      }
    }
  }
}
.items li {
  position: relative;
  color: rgba(0, 0, 0, 0.54);
  background: url(../assets/images/mine/myselefIcon1.png) no-repeat 0.32rem;
  background-size: 0.48rem auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  line-height: 0;
  list-style: none;
}
.items li > a {
  display: block;
  padding-right: 0.56rem;
  box-sizing: border-box;
  padding-left: 1.12rem;
  height: 1.04rem;
  line-height: 1.04rem;
  font-size: 0.28rem;
  font-style: normal;
  color: rgba(0, 0, 0, 0.87);
}
.items li:after {
  content: "";
  position: absolute;
  right: 5.12px;
  right: 0.32rem;
  top: 50%;
  width: 3.2px;
  width: 0.2rem;
  height: 3.2px;
  height: 0.2rem;
  border-left: 1px solid currentColor;
  border-top: 1px solid currentColor;
  transform: translate3d(0, -50%, 0) rotate(135deg);
}
li.i-member {
  background-image: url(../assets/images/mine/myselefListP3.png);
}
li.i-wallet {
  background-image: url(../assets/images/mine/myselefListP4.png);
}
li.i-service {
  background-image: url(../assets/images/mine/myselefListP5.png);
}
li.i-mihome {
  background-image: url(../assets/images/mine/myselefListP6.png);
}
li.i-fcode {
  background-image: url(../assets/images/mine/myselefListP7.png);
}
li.i-gift {
  background-image: url(../assets/images/mine/myselefListP2.png);
}
li.i-setting {
  background-image: url(../assets/images/mine/myselefListP1.png);
}
</style>