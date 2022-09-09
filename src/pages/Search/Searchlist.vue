// 这个是大家可以用的公共组件头
<template>
  <div class="Search-head" >
    <span
      class="iconfont icon-you"
      style="
        position: unset;
        font-size: .5rem;
        width: .5rem;
        height: .5rem;"
      @click="backtoOne()"
    ></span>
    <input
      class="Search-box"
      type="text"
      placeholder="搜索商品名称"
      v-model="search"
      v-if="flag"
    />
    <span
      class="iconfont icon-sousuo"
      style="
        position: unset;
        display: block;
            width: .6rem;
            height: .6rem;"
      @click="searchData()"
      v-if="flag"
    ></span>
  </div>
  
</template>

<script>
export default {
    data(){
        return{
            search:'',
            flag:true
        }
    },

    methods:{
        backtoOne(){
          if(location.href.includes('searchreault')){
            this.$router.replace('/homepage');
          }else{
            this.$router.back(-1);
            this.flag=true;
          }
        },
        created(){

        },
        searchData(){
            console.log(this.$router);
            let search = this.search,
            params = {type:search};
            
            if(!location.href.includes("searchreault")){
              this.$router.push({name:'searchreault',params});
              this.flag=false;
            }
            
//         },
//         searchData(){
//             axios.post('/sousuo',{
//                 params:{
//                     lx: 'all',
//                     type: '',
//                     search: '',
//                     name:''
//                 }
//             }).then(result => {
//             if (parseInt(result.code) === 0) {
//                 return result;
//                 }
//             })
//             return Promise.reject(result.codeText);
//   },
        }
    }
}
</script>

<style>
.Search-head {
  display: flex;
  align-items: center;
  height: 0.8rem;
  width: 100%;
  background: #f5f5f5;
}

.Search-box {
  border: 1px solid #e5e5e5;
  border-radius: 0.04rem;
  width: 80%;
  padding: 0 0.2rem;
  outline: 0;
  font-size: 0.3rem;
  font-weight: 400;
  height: 0.5rem;
  line-height: normal;
}
</style>
