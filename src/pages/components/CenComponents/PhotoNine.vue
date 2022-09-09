<template>
    <div class="phone-welfare">
      <div class="phone-welfare-item" :key="index" v-for="(item,index) in phoneWelfare">
        <img :src="item" alt />
      </div>
      <div class="phone-welfare-item-floor">
        <img :src="phoneWelfareFloor" alt />
      </div>
    </div>
</template>

<script>
export default {
  props:["phoneWelfare","phoneWelfareFloor"]
}
</script>

<style lang="less">
    .phone-welfare {
    display: flex;
    flex-wrap: wrap;
    .phone-welfare-top {
      img {
        width: 100%;
      }
    }
    .phone-welfare-item {
      width: 33.3333%;

      img {
        width: 100%;
      }
    }
    .phone-welfare-item-floor {
      img {
        width: 100%;
      }
    }
  }
</style>