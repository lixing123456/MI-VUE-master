<template>
  <div class="content-a">
    <div class="header">
      <h1 class="header-title">九零电商购物管理系统</h1>
    </div>
    <div class="zhixiang">
      <div class="login-form">
        <div style="text-align: center">
          <h3>登 录</h3>
        </div>
        <router-link to="/zhuce">
          <el-button type="primary" class="yonghu">用户登录</el-button>
        </router-link>
        <el-button type="primary" class="guanliyuan" @click="tiaozhuan"
          >管理员登录</el-button
        >
      </div>
      <el-dialog
        title="管理员验证"
        :visible.sync="dialogVisibleBBB"
        width="40%"
        :before-close="handleClose"
        :modal="true"
        :close-on-click-modal="false"
      >
        <span style="font-size: 20px">请输入密码</span>
        <input
          type="text"
          v-model="password"
          style="width: 70%; height: 30px; margin-left: 10px"
        />
        <span slot="footer" class="dialog-footer">
          <el-button @click="handleClose">取 消</el-button>
          <el-button type="primary" @click="yanzheng">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
// import { Dialog } from "vant";
export default {
  data() {
    return {
      dialogVisibleBBB: false,
      password: "",
    };
  },
  methods: {
    handleClose() {
      this.$confirm("确认关闭?")
        .then((_) => {
          this.dialogVisibleBBB = false;
          this.password == "";
          // this.$router.push("/beijing");
        })
        .catch((_) => {});
    },
    yanzheng() {
      if (this.password == "123456789") {
        this.password == "";
        this.dialogVisibleBBB = false;
        this.$router.push("/guanlizhe");
      } else {
        this.$message({
          showClose: true,
          message: "密码输入错误",
          type: "error",
        });
      }
    },
    tiaozhuan() {
      this.dialogVisibleBBB = true;
    },
  },
};
</script>

<style>
.content-a {
  height: 660px;
  width: 100%;
  overflow-y: hidden;
  background: url("./image/beijinga.jpg");
  background-size: 100%;
}
.header {
  width: 100%;
}
.header-title {
  margin-left: 720px;
  font-size: 50px;
  padding-top: 140px;
  color: white;
}
.zhixiang img {
  width: 150px;
  height: 150px;
  margin-top: 167px;
}
.right {
  margin-left: 1012px;
}
.left {
  margin-left: 0px;
}

.login-form {
  text-align: center;
  vertical-align: middle;
  position: absolute;
  top: 45%;
  right: 200px;
  padding: 10px;
  width: 300px;
  height: 150px;
  background-color: #29404f;
  border: 1px solid #319cfc;
  border-radius: 5px;
  box-shadow: 1px 1px 3px #000;
  color: #319cfc;
  z-index: 99;
}
.login-form h3 {
  font-size: 24px;
  margin-top: 10px;
  margin-bottom: 20px;
  color: powderblue;
}
.login-form .yonghu {
  margin-left: 10px !important;
  margin-top: 25px !important;
}
.login-form .guanliyuan {
  margin-left: 60px !important;
}
</style>