<template>
  <div class="re-container">
    <!-- 循环绑定 -->
<div class="list">
            <ul class="cart-main-list-item" :key="index" v-for="(item,index) in shangpinliebiao" @click="toProductDetail(item.id)">
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
  </div>
</template>
<script>
 import axios from '../../api/index';
export default {
  data(){
    return{
      shangpinliebiao:[]
    }
  },

methods: {
      toProductDetail(projectId){
      this.$router.push("/productDetail/"+projectId);
    }
},
  mounted(){
     axios.get('/shangpinliebiao/list').then(result => {
      if (parseInt(result.code) === 0) {
        // var a=result.data;
        // this.shangpinliebiao = a.filter(item => {
        // return item.name.includes('小米');})
        this.shangpinliebiao.push(result.data[4])
        }
    })
  }
};
</script>
<style lang="less" scoped>
.cart-main-list-item-handle{
  height: 1rem !important;
}
.cart-main-list-item-handle-gongnneg{
  font-size: 0.25rem;
}
</style>