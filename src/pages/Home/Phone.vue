<template>
  <div class="phone">
    <!-- 第一组件 大图片联合 -->
    <single-photo :datasrc="phoneShowTop" class="phone-show-top">
    </single-photo>
    <div class="phone_liner"></div>
    <single-photo :datasrc="phoneShowDown" class="phone-show-down">
    </single-photo>
    <div class="phone_liner"></div>
    <!-- 轮播组件 -->
    <div class="phone-sell">
      <swiper class="swiperphone" :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide class="swapper" :key="item.id" v-for="item in phoneSwiper">
          <div class="swapper-item">
            <img
              :src="item.src"
              alt
            />
            <div class="swiper-show-info">
              <div class="show-name" v-html="item.name"></div>
              <div class="show-gongneng" v-html="item.gongneng">item.gongneng</div>
              <div class="show-price" v-html="'￥'+item.price">￥</div>
              <div class="show-goumai" v-html="item.goumai"></div>
            </div>
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>-->
      </swiper>
    </div>
    <div class="phone_liner"></div>
    <!-- 手机组件 -->

    <single-photo :datasrc="phoneFuli"  class="phone-fuli-top">
    </single-photo>
    <!-- 福利组件 -->
    <photo-nine :phoneWelfare="phoneWelfare" :phoneWelfareFloor="phoneWelfareFloor"></photo-nine>
    <div class="phone_liner"></div>
    <!-- <div class="phone-welfare">
      <div class="phone-welfare-item" :key="index" v-for="(item,index) in phoneWelfare">
        <img :src="item" alt />
      </div>
      <div class="phone-welfare-item-floor">
        <img :src="phoneWelfareFloor" alt />
      </div>
    </div> -->
    
    <!-- sell组件 -->
    <good-componenttwo></good-componenttwo>
    <div class="phone_liner"></div>
    <!-- 循环展示组件 -->
    <div class="phone-floor-show">
      <div class="phone-floor-show-top">
        <img
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ce1fa43295944d9f007e222242b4303c.jpg?thumb=1&w=720&h=104"
          alt
        />
      </div>
      <div class="phone_liner"></div>
      <div class="phone-floor-show-middle">
        <div
          class="phone-floor-show-middle-item"
          :key="index"
          v-for="(item,index) in phoneFloorShowMiddle"
        >
          <img :src="item" alt />
        </div>
      </div>
      <div class="phone_liner"></div>
      <div class="phone-floor-show-down">
        <img
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/bb91d74f2e912568ceb834b9fbd828e0.jpg?thumb=1&w=720&h=280"
          alt
        />
      </div>
    </div>
    <!-- 底部图片组件 -->
    <div class="phone-floor"></div>
  </div>
</template>

<script>
import SinglePhoto from "../components/CenComponents/SinglePhoto";
import PhotoNine from "../components/CenComponents/PhotoNine";
import GoodComponenttwo from "../components/CenComponents/GoodComponenttwo";
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 2.4,
        spaceBetween: 20,
        centeredSlides: true,
        //以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
        notNextTick: true, // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        autoplay: false,
        loop: true,
        direction: "horizontal",
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        centeredSlides: true,
        paginationClickable: true,
        keyboard: true,
        mousewheelControl: true,
        observeParents: true, // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true
      },
      phoneShowTop:
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7242a6f64a85451435401a9c91ab6c5c.jpg?thumb=1&w=720&h=743",
      phoneShowDown:
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d14ef6575c3f5f1ed66753ffe13ee702.jpg?thumb=1&w=720&h=91",
      phoneFuli:"//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4680750ff3a08e7381e191f5c4c57b8.jpg?thumb=1&w=720&h=91",
      phoneWelfare: [
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c302fb8cdf79e5be0cff62854f5b4d56.jpg?thumb=1&w=240&h=270",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0847b87c19528c03fda1a2f3360506b3.jpg?thumb=1&w=240&h=270",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/38b4c00c3eb729ab337226c58cef0f5d.jpg?thumb=1&w=240&h=270",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/aae3e2db7d6d4407d758770a133ecf59.jpg?thumb=1&w=240&h=235",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/81a39cb087ce35a4822c713c19389369.jpg?thumb=1&w=240&h=235",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac64333ba8ddf7981291a05587e4dfe6.jpg?thumb=1&w=240&h=235",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/26108ab1c68f8c51197fca0cc15d0f7b.jpg?thumb=1&w=240&h=240",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/07eeec9d0fe379609415a6696747fa7a.jpg?thumb=1&w=240&h=240",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/428c00050135e0b284c7e602c1f7d3ff.jpg?thumb=1&w=240&h=240"
      ],
      phoneWelfareFloor:
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/86f6f18daed9d0fdf46eaf0e2ca7cc40.jpg?thumb=1&w=720&h=135",
      phoneFloorShowMiddle: [
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/960e1b2fefe6ef6c621857ea4298b9db.jpg?thumb=1&w=360&h=323",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9aa0431e0e2918b1bf2ca54442388dda.jpg?thumb=1&w=360&h=323",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2827d76cb767b80fde616ba97c665d1f.jpg?thumb=1&w=360&h=327",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac429b480e6af8366df2d31dc8f0a6a9.jpg?thumb=1&w=360&h=327"
      ],
      phoneSwiper: [
        {
          id: 5,
          src:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/bbf706954e6e9fbc62e33a6ad38728ad.jpg?thumb=1&w=304&h=280",
          name: "Redmi Note 8",
          gongneng: "千元4800万四摄",
          price: "999",
          goumai: "立即购买"
        },
        {
          id: 6,
          src:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e05bc3c71baf7346073da4493e27bdf0.jpg?thumb=1&w=304&h=280",
          name: "Redmi Note 20",
          gongneng: "千元9800万四摄",
          price: "12789",
          goumai: "立即购买"
        },
        {
          id: 7,
          src:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e05bc3c71baf7346073da4493e27bdf0.jpg?thumb=1&w=304&h=280",
          name: "Redmi Note 尊享版",
          gongneng: "超级发烧机Plus",
          price: "22399",
          goumai: "立即购买"
        }
      ]
    };
  },
  components: {
    SinglePhoto,
    PhotoNine,
    GoodComponenttwo
  }
};
</script>

<style lang='less'>
.phone {
  font-size: 0;
  width: 7.5rem;
  .phone-show-top {
    padding-top: 1.475rem;
    width: 100%;
    img {
      width: 100%;
    }
  }
  .phone_liner {
    width: 100%;
    height: 0.111rem;
    background-color: rgb(37, 1, 104);
  }

  .phone-show-down {
    margin-top: 0;
    width: 100%;
    img {
      width: 100%;
    }
  }
  .phone-fuli-top{
    img {
      width: 100%;
    }
  }
  .phone-sell {
    height: 5.2rem;
    position: relative;
    font-size: 0.1rem;
    background: rgb(37, 1, 104);
    .swiperphone {
      position: absolute;
      top: -1.5rem;
    }
    .swapper {
      .swapper-item {
        background: #ffffff;
        margin-left: 0.1rem;
        width: 3.166rem;
        height: 5.2rem;
        .swiper-show-info {
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
            margin: 0 auto;
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
  }
  
  .phone-sell-table {
    background-color: rgb(71, 23, 147);
    .phone-sell-table-top {
      img {
        width: 100%;
      }
    }
    .phone-sell-table-middle {
      width: 100%;
      .phone-sell-table-middle-img {
        border-radius: 3px;
        width: 7.1666rem;
        img {
          margin-left: 0.2rem;
          margin-top: 0.1rem;
          width: 100%;
        }
      }
      .phone-sell-table-middle-img-info {
        margin-left: 0.2rem;
        width: 7.1666rem;
        height: 1.49rem;
        background: #ffffff;
        position: relative;
        .phone-sell-table-middle-img-info-text {
          position: absolute;
          width: 4.2916rem;
          height: 0.9rem;
          left: 0.2rem;
          top: 0.2rem;
          .phone-sell-table-middle-img-info-text-first {
            font-size: 0.32rem;
            font-weight: bolder;
            color: #3c3c3c;
            white-space: nowrap;
            overflow: hidden;
          }
          .phone-sell-table-middle-img-info-text-second {
            font-size: 0.2rem;
            color: #3c3c3c;
            height: 1.5em;
            line-height: 1.5em;
            white-space: nowrap;
            overflow: hidden;
          }
        }
        .phone-sell-table-middle-img-info-button {
          position: absolute;
          width: 2.29rem;
          height: 0.9104rem;
          right: 0.2rem;
          top: 0.2rem;
          .phone-sell-table-middle-img-info-button-first {
            position: absolute;
            font-size: 0.32rem;
            color: #ff4a48;
            font-weight: 700;
            text-align: right;
            line-height: 1em;
            height: 1.2em;
            white-space: nowrap;
            text-align: center;
          }
          .phone-sell-table-middle-img-info-button-second {
            position: absolute;
            top: 0.4rem;
            right: 0.3rem;
            text-align: center;
            width: 2.5rem;
            background: #ea625b;
            border-radius: 0.05rem;
            color: #fff;
            font-size: 0.24rem;
            padding: 0.16rem 0;
            font-weight: 700;
          }
        }
      }
      .phone-sell-table-middle-info {
        width: 100%;
        background-color: rgb(71, 23, 147);
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .phone-sell-table-middle-info-item {
          border: 1px solid #ffffff;
          border-radius: 3px;
          background-color: #ffffff;
          margin-left: 0.13rem;
          margin-top: 0.2rem;
          width: 3.52rem;
          height: 5.8316rem;
          .phone-sell-table-middle-info-photo {
            img {
              width: 100%;
            }
          }
          .phone-sell-table-middle-info-text {
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
    }
  }
  .phone-floor-show {
    .phone-floor-show-top {
      img {
        width: 100%;
      }
    }
    .phone-floor-show-middle {
      display: flex;
      flex-wrap: wrap;
      .phone-floor-show-middle-item {
        width: 50%;
        img {
          width: 100%;
        }
      }
    }
    .phone-floor-show-down {
      img {
        width: 100%;
      }
    }
  }
  .phone-floor {
    height: 1.3rem;
  }
}
</style>