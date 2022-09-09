<template>
  <div class="SearchResult">
    <div class="search-head">
      <!-- <searchlist /> -->
      <a href>
        <img
          src="https://i8.mifile.cn/b2c-mimall-media/7e6f1f652ccc78e3bf84c2e85585a6f4.png?w=1080&h=300&bg=E8EDF1"
          alt
          style="width: 100%;"
        />
      </a>
    </div>
    <div class="search-body">
      <goodlist v-if="List.length" :List="List"/>
    </div>
  </div>
</template>

<script>
// import searchlist from "../Search/Searchlist";
import goodlist from "../Search/goodlist";
import axios from '../../api';
export default {
  data(){
    return{
      List:[]
    }
  },
  created(){
    let query = {params:this.$route.params}
    console.log(query);
    axios.get('/sousuoshangpin/sousuo',query).then(result => {
		if (parseInt(result.code) === 0) {
			this.List = result.data;
		}
	});
  },
  components: {
    // searchlist,
    goodlist
  }
};
</script>

<style>
.search-head-select {
  background: #fafafa;
  height: 0.72rem;
  display: flex;
  align-items: center;
  font-size: 0.28rem;
  line-height: 0.72rem;
  width: 100%;
  z-index: 4;
}

.search-head-select a {
  text-align: center;
  color: rgba(0, 0, 0, 0.54);
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  position: relative;
  display: inline-block;
}

.search-head-button {
  width: 100%;
  position: relative;
  z-index: 1;
  background: #fafafa;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.28rem;
  position: relative;
  text-align: center;
}
.search-head-button a {
  display: inline-block;
  color: rgba(0, 0, 0, 0.54);
  width: 1.59rem;
  height: 0.6rem;
  line-height: 0.6rem;
  margin: 0 0.08rem;
  font-size: 0.24rem;
  position: relative;
  z-index: 3;
  border: 1px solid #eee;
}

</style>