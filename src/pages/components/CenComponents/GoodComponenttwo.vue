<template>
  <div class="phone-sell-table">
    <div class="phone-sell-table-top">
      <img
        :src="some.sellimg"
        alt
      />
      <div class="phone_liner" style="background-color: rgb(71, 23, 147);"></div>
    </div>
    <div class="phone-sell-table-middle">
      <div class="phone-sell-table-middle-img">
        <img
          :src="some.sellmiddle.src"
          alt
        />
      </div>
      <div class="phone-sell-table-middle-img-info">
        <div class="phone-sell-table-middle-img-info-text">
          <div class="phone-sell-table-middle-img-info-text-first" v-html="some.sellmiddle.first"></div>
          <div class="phone-sell-table-middle-img-info-text-second" v-html="some.sellmiddle.second"></div>
        </div>
        <div class="phone-sell-table-middle-img-info-button">
          <div class="phone-sell-table-middle-img-info-button-first" v-html="'￥'+some.sellmiddle.price+'起'"></div>
          <div class="phone-sell-table-middle-img-info-button-second">点击购买</div>
        </div>
      </div>
      <div class="phone-sell-table-middle-info">
        <div class="phone-sell-table-middle-info-item" :key="index" v-for="(item,index) in some.selldown">
          <div class="phone-sell-table-middle-info-photo" >
            <img :src="item.src" alt />
          </div>
          <div class="phone-sell-table-middle-info-text">
            <div class="show-name" v-html="item.name"></div>
            <div class="show-gongneng" v-html="item.gongneng"></div>
            <div class="show-price" v-html="'￥'+item.price"></div>
            <div class="show-old"><s>￥999</s></div>
            <div class="show-goumai">立即购买</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      some: {
        sellimg:
          "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/93e024104a2cbad0f9218778e25c19d1.jpg?thumb=1&w=720&h=95",
        sellmiddle: {
          src:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0fbe9af39cabf7a37d97796ca16481db.jpg?thumb=1&w=688&h=367",
          first: "小米CC9 Pro",
          second: "一亿像素 五摄四闪",
          price: "2799"
        },
        selldown: [
          {
            src: "../../.././assets/images/home/good/good1.jpg",
            name: "Redmi Note 8",
            gongneng: "千元4800万四摄",
            price: "900"
          },
          {
            src: "../../.././assets/images/home/good/good2.jpg",
            name: "Redmi Note 9",
            gongneng: "千元4800万四摄",
            price: "900"
          },
          {
            src: "../../.././assets/images/home/good/good3.jpg",
            name: "Redmi Note 10",
            gongneng: "千元4800万四摄",
            price: "900"
          },
          {
            src: "../../.././assets/images/home/good/good4.jpg",
            name: "Redmi Note 11",
            gongneng: "千元4800万四摄",
            price: "900"
          }
        ]
      }
    };
  },
  mounted(){
      console.log(this.some.selldown);
  }
};
</script>

<style lang="less">
.phone-sell-table-middle-info-text{
  position: relative;
  .show-old{
    position: absolute;
  width: 1rem;
  height: 0.1rem;
  font-size: 0.2rem;
  top: 0.8rem;
  left: 2.2rem;
}
}

</style>