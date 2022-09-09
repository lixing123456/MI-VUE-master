<template>
  <div>
    <div class="footer" v-show="showFooter">
      <router-link to="/homepage">
        <span class="iconfont icon-jingli"></span>
        <span>首页</span>
      </router-link>
      <router-link to="/type">
        <span class="iconfont icon-zhiwuguanli"></span>
        <span>分类</span>
      </router-link>
      <router-link to="/shopcart">
        <span class="iconfont icon-zhiwu"></span>
        <span>购物车</span>
      </router-link>
      <router-link to="/myself">
        <span class="iconfont icon-yonghuming"></span>
        <span>我的</span>
      </router-link>
    </div>
    <a v-show="xiangshang&&Xiangshang" class="xs" href=":;" @click="xsfun">
      <img src="https://m.mi.com/static/img/top.451d650ecd.png" alt="">
    </a>
    <router-view></router-view>
  </div>
</template>


<script>
~(function() {
  let evt = "onorientationchange" in window ? "orientationchange" : "resize";

  function computed() {
    let HTML = document.documentElement,
      deviceW = HTML.clientWidth,
      designW = 750,
      ratio = (deviceW / designW) * 100;
    if (deviceW >= designW) ratio = 100;
    HTML.style.fontSize = ratio + "px";
  }
  computed();
  window.addEventListener(evt, computed);
})();

export default {
  components: {},
  data() {
    return {
      showFooter: true,
      xiangshang:false,
      Xiangshang:false,
    };
  },

  methods: {
  routefilter(){
      let string = window.location.href;
        if(string.includes('myself')||string.includes('type')||string.includes('homepage')||string.includes('shopcart')||string.includes("orderList")){
          this.showFooter = true;
        }else{
          this.showFooter = false;
        }
        if(string.includes('homepage')){
          this.xiangshang = true;
        }else{
          this.xiangshang = false;
        }
    },
    handleScroll(){
      if(document.documentElement.scrollTop>300){
        this.Xiangshang=true;
      }else{
        this.Xiangshang=false;
      }
    },
    xsfun(ev){
      document.documentElement.scrollTop=0;
      ev.preventDefault();
    }
  },
  mounted(){
    this.routefilter();
    window.addEventListener('scroll', this.handleScroll, true);
  },
  beforeUpdate(){
    this.routefilter();
  },
};
</script>

<style lang='less'>
.footer {
  font-size: 0.32rem;
  color: black;
  position: fixed;
  z-index: 22;
  left: 0;
  bottom: -0.09rem;
  background: #fff;
  width: 100%;
  height: 1.04rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #ddd;
  box-sizing: border-box;
  .iconfont{
    font-size: 0.3rem !important;
  }
  a {
    flex: 1;
    text-align: center;
    color: black;
    display: flex;
    flex-direction: column;
  }
  a.router-link-active {
    color: #ff6700;
  }
}
.xs{
  position: fixed;
  z-index: 22;
  left:6.3rem;
  bottom: 1.5rem;
  img{
    width: 0.7rem;
  }

}
</style>