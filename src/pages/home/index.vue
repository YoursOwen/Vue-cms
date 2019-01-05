<template>
  <div id="homeContainer">

    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in picMsg" :key="index">
        <a :href="item.url">
          <img :src="item.img" alt="">
        </a>
      </mt-swipe-item>

    </mt-swipe>

    <!-- 九宫格导航栏 -->

      <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <!-- /home/newslist 是有讲究的,/home为基类的时候底部高亮 -->
                  <router-link to="/home/newslist">
		                    <img src="../../assets/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div>
                  </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="#">
		                    <img src="../../assets/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div>
                  </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="#">
		                    <img src="../../assets/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div>
                  </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="#">
		                    <img src="../../assets/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div>
                  </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="#">
		                    <img src="../../assets/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div>
                  </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="#">
		                    <img src="../../assets/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div>
                  </router-link>
                </li>
		        </ul>
  </div>
</template>

<script>
export default {
  data () {
    return ({
      picMsg:'',
    })
  },
  created() {
    this.getListMessage()
  },
  methods:{
    getListMessage () {
      this.$http.get('api/getlunbo')
      .then( response => {
       if(response.status === 200) {
         console.log(response)
         this.picMsg = response.body.message
       }
      })
    }
  }
}
</script>

<style lang='less' scoped>

.mint-swipe {
  height: 12.5rem;
  img {
  width: 100%;
  height: 100%;
  }
}

.mui-grid-view.mui-grid-9 {
  border:none;
  background-color: #fff;
  img {
    width: 60px;
    height: 60px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: none;
}


</style>

