<template>
  <div class="homer">
    <div class="headerbar">
      <div class="search">
        <img src="../assets/home/图表.jpg" alt />
        <div class="app-header-middle" @click="toSearch">
          &nbsp;
          <span class="iconfont icon-sousuo sousuo"></span>
          &nbsp;&nbsp;&nbsp;&nbsp;搜索商品名称
        </div>
        <div class="app-header-right">
          <img src="../assets/home/用户.png" alt="" @click="wode">
        </div>
      </div>
      <!-- <ly-tab
        v-model="selectedId"
        :items="items"
        :options="options"
        class="fix"
        @change="handleChange"
      /> -->
    </div>
    <!-- @change="handleChange" -->
    <router-view></router-view>
  </div>
</template>

<script>
import axios from '../api/index';
export default {
  data() {
    return {
      selectedId: 0,
      items: [
        { label: "推荐" },
        { label: "手机" },
        { label: "智能" },
        { label: "电视" },
        { label: "笔记本" },
        { label: "家电" },
        { label: "生活周边" }
      ],
      subRouteUrl: ["/homepage/recom", "/homepage/phone"],
      options: {
        activeColor: "rgb(237,91,0)", // 设置选中的颜色
        lineWidth: 2
      },
      lunbo: [
        "../assets/home/swiper/s1.jpg",
        "../assets/home/swiper/s2.jpg",
        "../assets/home/swiper/s3.jpg"
      ],
      swiperOption: {
        //以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
        notNextTick: true, // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        autoplay: false,
        loop: false,
        direction: "horizontal",
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: {
          el: ".swiper-pagination"
        },
        centeredSlides: true,
        paginationClickable: true,
        keyboard: true,
        mousewheelControl: true,
        observeParents: true, // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true
      }
    };
  },
  created(){
    axios.get('/fenlei/list').then(result => {
      if (parseInt(result.code) === 0) {
        this.items = result.data;
        console.log(result,'++++++++++');
        }
    })
    this.subRouteUrl.forEach((item,index)=>{
      if(location.href.includes(this.subRouteUrl[index])){
        this.selectedId = index;
      }
    })
  },
  methods: {
    handleChange(item, index) {
      this.selectedId = index;
      this.$router.replace(this.subRouteUrl[index]);
    },
    toSearch(){
      this.$router.replace('/search');
    },
    wode(){
      this.$router.replace('/myself');
    }
  }
};
</script>

<style lang='less'>
.homer {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  .headerbar {
    // position: fixed;
    // z-index: 31;
    // left: 0;
    // top: 0px;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2);
    background: #f2f2f2;
    .search {
      width: 100%;
      height: 0.8rem;
      line-height: .8rem;
      position: relative;
      img {
    position: absolute;
    left: 0.05rem;
    top: 0.05rem;
    width: 0.5rem;
    padding-top: .2rem;
    padding-left: .2rem;
      }
      .app-header-middle {
        position: absolute;
        font-size: 0.3rem;
        color: rgba(0, 0, 0, 0.3);
        border: 1px solid #e5e5e5;
        width: 74%;
        height: 0.62rem;
        left: 1rem;
        top: 0.1rem;
        line-height: 0.62rem;
        background: #FFF;
        .sousuo{
          position: absolute;
          left: 0.1rem;
          top: 0;
        }
      }
      .app-header-right {
        position: absolute;
        width: 0.5rem;
        height: 0.5rem;
        right: 0.5rem;
        top: -0.1rem;   
        img{
          width: 100%;
        }
      }
    }
    .fix {
      background-color: #f2f2f2;
      box-shadow: -15px 0 15px 0 #f2f2f2;
      .ly-tabbar {
        background: #f2f2f2;
        height: 0.7rem;
        color: rgb(116, 116, 116);
      }
    }
  }
}
</style>