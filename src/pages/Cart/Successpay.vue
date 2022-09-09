<template>
  <div class="Successpay">
    <div class="Successpay-head">
      <i class="iconfont icon-zhuye" 
      style="position: absolute;
      left: .5rem;
      font-size: .46rem;
      color: orangered;"
      @click="backHome()"
      >
      </i>
      支付成功
    </div>
    <div class="Successpay-main">
      <i class="iconfont icon-chenggong" 
      style="font-size: .6rem;
      vertical-align: initial;">
      </i>
      支付成功
    </div>
    <ul class="Successpay-list">
      <li>
        <span class="Successpay-list-left">交易方式</span>
        <span class="Successpay-list-right">支付宝支付</span>
      </li>
      <li>
        <span class="Successpay-list-left">下单时间</span>
        <span class="Successpay-list-right">2019-11-08&nbsp;13:17</span>
      </li>
      <li>
        <span class="Successpay-list-left">交易单号</span>
        <span class="Successpay-list-right">2019859489210</span>
      </li>
    </ul>
    <div class="Successpay-info">
      <a class="Successpay-info-item" @click="toOrderList()">去我的订单看看</a>
    </div>
  </div>
</template>
<script>
export default {
    methods:{
        backHome(){
            this.$router.push('/homepage');
        },
        toOrderList(){
           setTimeout(()=>{
              this.$router.push('/orderList/:type');
           },1000)
        }
    }
};
</script>
<style>
.Successpay{
  font-size: 25px;
}
</style>