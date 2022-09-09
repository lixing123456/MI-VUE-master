<template>
  <div class="cart-main-another cart-main-another-componment">
        <div class="lovely-promote">
          <img src="../../assets/images/gessulike.jpg" alt />
        </div>
        <div class="cart-main-another-list">
          <div class="cart-main-another-list-item" :key="index" v-for="(item,index) in likeList" style="    width: 49.3%;">
            <a href>
              <div class="goods-img-box">
                <img :src="item.images" alt />
              </div>
              <div class="goods-info">
                <div class="goods-info-detail" v-html="item.title"></div>
                <span>￥{{item.money}}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      likeList: [
        {
          images: "../../assets/images/item1.jpg",
          title: "AirPOP防雾霾口罩",
          money: 349
        },
        {
          images: "../../assets/images/item2.jpg",
          title: "小米手环4复联限量版",
          money: 299
        },
        {
          images: "../../assets/images/phone4.jpg",
          title: "Redmi Note 7 Pro",
          money: 1199
        },
        {
          images: "../../assets/images/tv.jpg",
          title: "小米电视4S 75英寸",
          money: 6999
        },
        {
          images: "../../assets/images/item2.jpg",
          title: "小米手环4复联限量版",
          money: 299
        },
        {
          images: "../../assets/images/phone4.jpg",
          title: "Redmi Note 7 Pro",
          money: 1199
        }
      ],
    };
  },
  methods: {
   
  }
};
</script>

<style lang='less'>
  .cart-main-another-componment {
    padding-bottom: 1rem!important;
  }
</style>