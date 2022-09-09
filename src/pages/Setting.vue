<template>
  <div class="settingContainer">
    <div class="commonHeader">
      <img @click="toBack()" src="../assets/images/turnBack.png" alt />
      <div class="commontitle">个人中心</div>
    </div>

    <ol>
      <li v-for="(item,index) in settingList" :key="index">{{item.name}}</li>
    </ol>

    <div v-show="showSignout" class="signout" @click="signout()">退出登录</div>
  </div>
</template>

<script>
import axios from "../api";
import { Notify } from "vant";
export default {
  components: {},
  data() {
    return {
      showSignout: false,
      settingList: [
        {
          name: "地址管理",
          router: ""
        },
        {
          name: "经营执照",
          router: ""
        },
        {
          name: "协议规则",
          router: ""
        },
        {
          name: "九零电商用户协议",
          router: ""
        },
        {
          name: "九零电商隐私政策",
          router: ""
        },
        {
          name: "九零电商使用协议",
          router: ""
        }
      ]
    };
  },
  mounted() {
    let isLogin = window.localStorage.getItem("isLogin");
    if (isLogin && isLogin == "yes") {
      this.showSignout = true;
    }
  },
  methods: {
    toBack() {
      window.history.go(-1);
    },
    signout() {
      localStorage.removeItem("isLogin");
      // window.history.go(-1);
      axios.post("/product/clear").then(result => {
        if (parseInt(result.code) === 0) {
          this.$notify({ type: "success", message: "退出成功" });
          setTimeout(this.$router.push("/beijing"), 500);
        }
      });
    }
  }
};
</script>

<style lang='less'>
.settingContainer {
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
  ol {
    // padding-top: 1rem;
    font-size: 0.3rem;
    margin-bottom: 0.3rem;
    li {
      width: 100%;
      display: inline-block;
      padding: 0.2rem;
      border-bottom: 1px solid #f6f6f6;
      box-sizing: border-box;
      position: relative;
      text-align: left;
      color: #3c3c3c;
    }
    li:after {
      content: " ";
      position: absolute;
      width: 0.14rem;
      height: 0.14rem;
      right: 0.14rem;
      top: 50%;
      margin-top: -0.07rem;
      border-right: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      transform: rotate(-45deg);
    }
  }
  .signout {
    display: block;
    width: 100%;
    height: 100%;
    font-size: 0.3rem;
    color: #3c3c3c;
    background-color: #f4f4f4;
    text-align: center;
    height: 1rem;
    line-height: 1rem;
    box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.12);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    cursor: pointer;
  }
}
.el-notification {
  width: 90% !important;
  height: 7% !important;
  font-size: 0.2rem !important;
}
.el-notification__icon{
  font-size: 0.44rem !important; 
}
.el-notification__content{
  font-size: 0.35rem !important;
  margin: 0.1rem 0.5rem !important;
}
</style>