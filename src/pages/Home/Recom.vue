<template>
  <div class="home">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="swapper">
        <img src="../../assets/home/swiper/封面.jpg" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="main-cell">
       <a href>
         <router-link  :to="{path:'/type/yundongyongpin',query:{flag:0}}"> 
         <img src="../.././assets/images/home/cell/女性护理.png" alt />
       <p>运动用品</p>
         </router-link>
      </a>
       <a href>
         <router-link  :to="{path:'/type/yiwuhuli',query:{flag:1}}" > 
         <img src="../.././assets/images/home/cell/衣物护理.png" alt />
         <p>衣物护理</p>
         </router-link>
      </a>
       <a href>
          <router-link :to="{path:'/type/xiyixifa',query:{flag:2}}" > 
          <img src="../.././assets/images/home/cell/洗发护发.png" alt />
         <p>洗发护发</p>
          </router-link>
      </a>
      <a href="http://www.baidu.com">
         <router-link  :to="{path:'/type/kouqianghuli',query:{flag:3}}">
         <img src="../.././assets/images/home/cell/口腔清洁.png" alt />
        <p>口腔护理</p>
         </router-link>
      </a>
        <a href>
       <router-link  :to="{path:'/type/chaoliuxinxie',query:{flag:4}}">
       <img src="../.././assets/images/home/cell/清洁纸品.png" alt />
       <p>清洁纸品</p>
       </router-link>
      </a>
      
    </div>
    <div class="main-cell">
      <a href>
        <router-link :to="{path:'/type/meironghufu',query:{flag:5}}">
        <img src="../.././assets/images/home/cell/美容护肤.png" alt />
        <p>美容护肤</p>
        </router-link>
      </a>
      <a href>
        <router-link  :to="{path:'/type/xiajiquwen',query:{flag:6}}">
        <img src="../.././assets/images/home/cell/夏季驱蚊.png" alt />
        <p>夏季驱蚊</p>
        </router-link>
      </a>
       <a href>
        <router-link  :to="{path:'/type/youxianshipin',query:{flag:7}}">
        <img src="../.././assets/images/home/cell/休闲饮品.png" alt />
        <p>休闲饮品</p>
        </router-link>
      </a>
      <a href>
        <router-link :to="{path:'/type/xiuxianyinpin',query:{flag:8}}">
        <img src="../.././assets/images/home/cell/休闲食品.png" alt />
        <p>休闲食品</p>
         </router-link>
      </a>
      <a href>
        <router-link :to="{path:'/type/yundongyongpin',query:{flag:0}}">
        <img src="../.././assets/images/home/cell/全部.png" alt />
        <p>全部商品</p>
         </router-link>
      </a>
    </div>



     <div class="floor-looper">
      <div class="floor-looper-item">

        <div class="floor-looper-item-content">
          <div class="floor-looper-item-content-show" :key="item.id" @click="toProductDetail(item.id)"  v-for="item in shangpinliebiao">
            <div class="floor-looper-item-content-show-photo">
              <img :src="item.src" alt />
            </div>
            <div class="floor-looper-item-content-show-info">
              <div class="show-name" v-html="item.name"></div>
              <div class="show-gongneng" v-html="item.gongneng"></div>
              <div class="show-price" v-html="'￥'+item.price"></div>
              <div class="show-goumai">立即购买</div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="floor-looper">
      <div class="floor-looper-item">
      </div>
    </div> 
   
    <div class="floor-huodong">
      <img
        src="../../assets/home/下面的图片.jpg"
        alt
      />
    </div>
    <div class="floor-floor-floor"></div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import * as types from '../../store/store-types';
import axios from '../../api/index';
export default {
  data() {
    return {
      shangpinliebiao:[],
      lunbo: [
        "../assets/home/swiper/s1.jpg",
        "../assets/home/swiper/s2.jpg",
        "../assets/home/swiper/s3.jpg",
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
  components: {
    swiper,
    swiperSlide
  },
  created(){
    this.$store.dispatch("phone/" + types.PHONE);
    console.log(this.$store.state);
    axios.get('/product/list').then(result => {
      if (parseInt(result.code) === 0) {
        this.shangpinliebiao = result.data;
        }
      })
  },
  methods:{
    toProductDetail(projectId){
      this.$router.push("/productDetail/"+projectId);
    }
  }
};
</script>

<style lang='less'>
.home {
  // width: 100%;
  // height: 100%;
  flex: 1;
  overflow-y:auto;
  overflow-x: hidden;
  .search {
    width: 100%;
    height: 0.8rem;
    position: relative;
    img {
      margin: 0.2rem 0 0 0.2rem;
      width: 0.5rem;
    }
    .app-header-middle {
      position: absolute;
      display: inline-block;
      font-size: 0.3rem;
      color: rgba(0, 0, 0, 0.3);
      border: 1px solid #e5e5e5;
      width: 75%;
      height: 0.6rem;
      top: -0.05rem;
      line-height: 0.6rem;
    }
    .app-header-right {
      width: 0.5rem;
      height: 0.5rem;
      display: inline-block;
      position: absolute;
      right: 0.15rem;
      top: -0.1rem;
      margin-top: 0.2rem;
      span {
        font-size: 0.45rem;
      }
    }
  }
  .fenlei {
    text-align: center;
    display: flex;
    li {
      width: 0.92rem;
      height: 0.52rem;
    }
  }
  .swiper-container {
    width: 100%;
    // padding-top:1.5rem; 
    
  }
  swiper {
    touch-action: none;
  }
  .swapper {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .swiper-pagination-bullet-active {
    background: #ffffff;
  }
  .main-cell {
    display: flex;
    padding-left:0.35rem;
    a {
      width: 1.5rem;
      height: 1.5832rem;
      img {
        // width: 1.28rem;
        width: 70%;
        height: 70%;
      }
      p{
        font-size: 0.25rem;
        font-family:'Courier New', Courier, monospace;
      }
    }
  }
  .main-cell-shop {
    display: flex;
    margin-top: 0.2rem;
    .main-cell-shop-left,
    .main-cell-shop-right {
      width: 3.725rem;
      height: 5.2916rem;
      img {
        width: 100%;
      }
    }
    .main-cell-shop-right {
      margin-left: 0.05rem;
    }
    .main-cell-shop-right {
      display: flex;
      flex-direction: column;
      .main-cell-shop-right-top,
      .main-cell-shop-right-floor {
        width: 100%;
        height: 50%;
        img {
          width: 100%;
        }
      }
    }
  }
  .floor-looper {
    width: 100%;

    .floor-looper-item {
      .floor-looper-item-firstphoto {
        margin-top: 0.2rem;
        img {
          width: 100%;
        }
      }
      .floor-looper-item-secondphoto {
        margin-top: 0.2rem;
        img {
          width: 100%;
        }
      }
      .floor-looper-item-content {
        display: flex;
        flex-wrap: wrap;
        .floor-looper-item-content-show {
          width: 3.5626rem;
          height: 5.066rem;
          margin-left: 0.125rem;
          margin-top: 0.1rem;
          img {
            width: 100%;
          }
          .floor-looper-item-content-show-info {
            .show-name {
              text-align: center;
              font-size: 0.28rem;
              color: rgba(0, 0, 0, 0.87);
            }
            .show-gongneng {
              text-align: center;
              margin-top: 0.06rem;
              font-size: 0.22rem;
              line-height: 0.3rem;
              color: rgba(0, 0, 0, 0.54);
            }
            .show-price {
              text-align: center;
              font-size: 0.28rem;
              color: #ea625b;
              height: 1.5em;
              line-height: 1.5em;
            }
            .show-goumai {
              margin-left: 0.78rem;
              text-align: center;
              width: 2rem;
              background: #ea625b;
              border-radius: 0.05rem;
              color: #fff;
              font-size: 0.24rem;
              padding: 0.16rem 0;
              font-weight: 700;
            }
          }
        }
      }
      .floor-looper-item-floor {
        width: 100%;
        height: 1.04rem;
        text-align: center;
        color: rgba(0, 0, 0, 0.6);
        line-height: 1rem;
        font-size: 0.28rem;
        border-top: 0.02rem solid rgba(0, 0, 0, 0.6);
      }
    }
  }
  .floor-show {
    display: flex;
    flex-wrap: wrap;
    .floor-show-item {
      // width: 3.729rem;
      width: 49.5%;
      margin-right: 0.035rem;
      img {
        width: 100%;
      }
    }
    .floor-show-item:nth-child(2n) {
      margin-right: 0rem;
    }
  }
  .floor-floor-floor {
    height: 0.95rem;
  }
  .floor-huodong {
    img {
      width: 100%;
    }
  }
  .floor-liaojie {
    img {
      width: 100%;
    }
  }
  .floor-looper-item-content-show-photo{
    width: 3.44rem;
    height:2.8rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>