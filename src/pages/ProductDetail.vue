<template>
  <div class="productDetailContainer">
    <div class="productDetailHeader">
      <!-- <swiper :options="swiperOption" ref="mySwiper">
       
        <swiper-slide v-for="item in lunbo" :key="item.id" class="swapper">
          <img :src="item.src" alt />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>-->
      <div class="product_info_product_src">
        <img :src="productInfo.src" />
      </div>
      <img
        class="headerActionPic toBack"
        @click="toBack()"
        src="../assets/images/detailBack.png"
        alt
      />
    </div>
    <div class="section section-detail">
      <div class="product_info_product_name" v-text="productInfo.name"></div>
      <div class="product_info_product_desc" v-text="productInfo.desc"></div>
      <div class="product_info_product_price">
        ￥
        <div class="price cur-price" v-text="productInfo.price"></div>
      </div>
    </div>
    <!-- <div class="productIntrpduceList">
      <img v-for="item in productIntroList" :key="item.id" :src="item.url" />
    </div> -->
    <footer>
      <div class="fill-height layout align-center bgw">
        <a
          href="javascript:;"
          @click="this.$router.replace('/shopcart')"
          class="footer-btn router-link-active"
        >
          <img class="footer-icon" src="../assets/images/homeIcon.png" alt />
          <span style="font-size:28px">首页</span>
        </a>
        <a
          href="javascript:;"
          @click="this.$router.replace('/homepage')"
          class="footer-btn router-link-active"
        >
          <img class="footer-icon" src="../assets/images/shopIcon.png" alt @click="gouwuche()" />
          <span style="font-size:28px">购物车</span>
          <em v-if="productInfo.collectState>=1" class="bubble" v-text="productInfo.collectState"></em>
        </a>
        <div class="action-box flex" @click="changeType()">
          <a href="javascript:;" class="btn buy-btn" style="font-size:25px">加入购物车</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from "../api/index";
export default {
  data() {
    return {
      userId:'',
      lunbo: [
        {
          id: 1,
          src: "../assets/home/swiper/s1.jpg"
        },
        {
          id: 2,
          src: "../assets/home/swiper/s2.jpg"
        },
        {
          id: 3,
          src: "../assets/home/swiper/s3.jpg"
        },
        {
          id: 4,
          src: "../assets/home/swiper/s5.jpg"
        },
        {
          id: 5,
          src: "../assets/home/swiper/s4.jpg"
        }
      ],
      swiperOption: {
        notNextTick: true,
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
        observeParents: true,
        debugger: true
      },
      productIntroList: [
        { id: 1, url: "../assets/images/productDetail/productIntroduce1.jpg" },
        { id: 2, url: "../assets/images/productDetail/productIntroduce2.jpg" },
        { id: 3, url: "../assets/images/productDetail/productIntroduce3.jpg" },
        { id: 4, url: "../assets/images/productDetail/productIntroduce4.jpg" },
        { id: 5, url: "../assets/images/productDetail/productIntroduce5.jpg" }
      ],
      productInfo: {
        id: 0,
        name: "",
        desc: "",
        price: "8888",
        collectState: 0,
        src: "",
        userId:window.localStorage.userId
      }
    };
  },
  methods: {
    gouwuche() {
      this.$router.push("/shopcart");
    },
    toBack() {
      // window.history.go(-1);
      this.$router.push("/homepage");
    },
    changeType() {
      // let isLogin = window.localStorage.getItem("isLogin");
      // if (isLogin && isLogin == "yes") {
      axios
        .post("/product/update", {
          id: this.productInfo.id,
          name: this.productInfo.name,
          desc: this.productInfo.desc,
          price: this.productInfo.price,
          collectState: parseFloat(this.productInfo.collectState + 1),
          
        })
        .then(result => {
          if (parseInt(result.code) === 0) {
            this.productInfo.collectState = parseFloat(
              this.productInfo.collectState + 1
            );
          }
        });
      //  axios
      //   .post("/user/update", {
      //     id:this.productInfo.id,
      //     userId:this.userId
      //   })
      //   .then(result => {
      //     if (parseInt(result.code) === 0) {
      //     }
      //   });
    }
  },
  mounted() {
    this.userId=window.localStorage.userId
    let id = this.$route.params.productId;
    axios.get("/shangpinliebiao/list").then(result => {
      if (parseInt(result.code) === 0) {
        var a = result.data;
        var b = a.filter(item => {
          if (item.id == id) {
            return item;
          }
        });

        (this.productInfo.id = b[0].id),
          (this.productInfo.name = b[0].name),
          (this.productInfo.desc = b[0].desc),
          (this.productInfo.price = b[0].price),
          (this.productInfo.collectState = 0);
        this.productInfo.src = b[0].src;
      }
    });
    // axios
    //   .get("/product/info", {
    //     params: {
    //       productId: id
    //     }
    //   })
    //   .then(result => {
    //     if (parseInt(result.code) === 0) {
    //       this.productInfo = result.data;
    //     }
    //   });
  },
  created() {}
};
</script>

<style lang='less'>
.productDetailHeader {
  width: 7.6rem;
  height: 6.6rem;
  position: relative;
  .product_info_product_src {
    width: 7.6rem;
    height: 6.6rem;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .swapper {
    width: 100%;
    height: 7.92rem !important;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .headerActionPic {
    position: absolute;
    display: block;
    width: 0.6rem;
    height: 0.6rem;
    color: #ddd;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    box-sizing: border-box;
    padding: 0.1rem;
    top: 0.2rem;
    left: 0.2rem;
    z-index: 9;
  }
  .share {
    left: auto;
    right: 0.2rem;
  }
}
.section .product_info_product_name {
  padding: 0.32rem 0.32rem 0;
  line-height: 1.5em;
  font-size: 0.4rem !important;
}
.product_info_product_desc {
  padding: 0 0.32rem;
  line-height: 1.5em;
  word-break: break-all;
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.24rem !important;
}
.product_info_product_price {
  padding: 0.2rem 0.32rem 0.32rem;
  color: #ff6700;
  font-size: 0.4rem;
  .cur-price {
    position: relative;
    // padding-left: 0.5em;
    font-size: 0.48rem;
    display: inline-block;
    line-height: 1em;
  }
}
.productIntrpduceList img {
  width: 100%;
}
.productDetailContainer {
  footer {
    padding: 0 0.16rem 0.16rem;
    background: transparent;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    .bgw {
      background-color: hsla(0, 0%, 100%, 0.96) !important;
      width: 100%;
      height: 1.04rem;
      border: 1px solid #e5e5e5;
      border-radius: 0.16rem;
      overflow: hidden;
      box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
        0 4px 5px rgba(0, 0, 0, 0.14), 0 1px 10px rgba(0, 0, 0, 0.12);
      display: flex;
    }
    .footer-btn {
      position: relative;
      display: flex;
      text-decoration: none;
      width: auto;
      margin-left: 0.5rem;
      color: rgba(0, 0, 0, 0.54);
      flex-direction: column;
      span {
        color: rgba(0, 0, 0, 0.54);
      }
      .bubble {
        position: absolute;
        min-width: 0.28rem;
        line-height: 0.28rem;
        height: 0.28rem;
        box-sizing: border-box;
        padding: 0 0.05rem;
        font-size: 0.18rem;
        overflow: hidden;
        text-align: center;
        border-radius: 0.28rem;
        background: #ed4d41;
        color: #fff;
        top: 0;
        left: 50%;
        transform: translate3d(0.1rem, -20%, 0);
        font-style: normal;
      }
    }
    .action-box {
      margin-right: 0.32rem;
      margin-left: 0.4rem;
      text-align: right;
      flex: 1;
      .buy-btn {
        display: inline-block;
        width: auto;
        max-width: 4rem;
        overflow: hidden;
        padding: 0 0.48rem;
        height: 0.64rem;
        line-height: 0.64rem;
        border-radius: 0.32rem;
        background: #ff6700;
        color: #fff;
        text-align: center;
      }
    }
    .footer-icon {
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto 0.04rem;
    }
  }
}
</style>