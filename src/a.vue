<template>
  <div>
    <van-tree-select
  height="55vw"
  :items="items"
  :main-active-index.sync="active"
>
  <template slot="content">
    <van-image v-if="active === 0" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
    <van-image v-if="active === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
  </template>
</van-tree-select>
  </div>
</template>


<script>

import { TreeSelect } from 'vant';
export default {
 active: 0,
      items: [{ text: '分组 1' }, { text: '分组 2' }]
};
</script>

<style lang='less'>

</style>