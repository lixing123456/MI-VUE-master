// 这个是搜索结果的列表的商品
<template>
    <div class="good-list">
      <div class="item-box" :key="item.id" v-for="item in List" @click="toProductDetail(item.id)">
        <a href="">
          <img :src="item.src" alt="" style="width: 2.53rem;
                  height: 2.53rem;
                  position: relative;">
        </a>
        <div class="item-detail">
          <h3 v-html="item.name"></h3>
          <p v-html="item.desc"></p>
          <div class="item-detail-list" style="flex: 1;">
            <span >我没这个字段</span>
            <span v-html="item.gongneng"></span>
            <span v-html="item.type"></span>
          </div>
          <div style="    color: #ff6700;
    font-size: .36rem;
    line-height: 1;
    margin-top: .22rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;" v-html="item.price+'￥'"></div>
        </div>
    </div>
      
    </div>
</template>

<script>
export default {
    props:["List"],
    created(){
      console.log(this.List);
    },
    methods:{
      toProductDetail(projectId){
      this.$router.push("/productDetail/"+projectId);
    }
    }
}
</script>

<style>
/* body{
  background: #eee;
} */
.item-box{
  display: flex;
    padding: .28rem 0;
    padding-right: .28rem;
    min-height: 2.53rem;
    position: relative;
    background: #fff;
    border:1px solid #bbb;
    margin-bottom: .2rem;
    }
.item-box a{
      display: block;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    padding: .28rem 0;
    padding-right: .28rem;
    min-height: 2.53rem;
    position: relative;
    background: #fff;
}
h3{
      font-size: .28rem;
    color: rgba(0,0,0,.87);
    line-height: .38rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-weight: 400;
}

.item-detail p{
      font-size: .2rem;
    line-height: .27rem;
    color: rgba(0,0,0,.54);
    margin-top: .05rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.item-detail-list span{
      color: rgba(0,0,0,.4);
    font-size: .3rem;
    line-height: .27rem;
    height: .27rem;
    overflow: hidden;
}
    
</style>