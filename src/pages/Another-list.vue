      <template name="another-list">
              <div class="cart-main-another">
        <div class="lovely-promote">
          <img src="../assets/images/gessulike.jpg" alt />
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
    
}
</script>

<style>

</style>