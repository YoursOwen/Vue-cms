<template>
  <div class="photoInfoContainer">
    <h3 class="title">{{ imagesInfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ imagesInfo.add_time | timeFliter}}</span>
      <span>点击：{{ imagesInfo.click }}次</span>
    </p>
    <hr>

    <div class="photo-view">
        <img
        class="preview-img"
        v-for="(item, index) in list"
        :src="item.src"
        height="100"
        @click="$preview.open(index, list)"
        :key="index"
      >
    </div>

    <div class="photo-content" v-html="imagesInfo.content "></div>

    <comment :id="id"></comment>

  </div>
</template>

<script>
export default {
data() {
  return {
    imagesInfo:{},
    id:this.$route.params.id,
    list:[],
  }
},
created() {
  this.getImageInfoHandle()
  this.getThumbsHandle()
},
methods: {
  getImageInfoHandle() {
    this.$http.get(`api/getimageInfo/${this.id}`)
    .then(res => {
      if(res.body.status === 0) {
        this.imagesInfo = res.body.message[0]
      }
    })
  },
  getThumbsHandle() {
    this.$http.get(`api/getthumimages/${this.id}`)
    .then(res => {
      //必须为每个images添加w和h属性，才能打得开大图
      res.body.message.forEach(item => {
        item.w = 600;
        item.h = 400;
      });

      this.list = res.body.message
    })
  }
},

}
</script>

<style lang="less" scoped>
.photoInfoContainer {
  background-color: #fff;
  .title {
    font-size: 15px;
    text-align: center;
    color:#26a2ff;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
  }
  .photo-content {
    font-size: 13px;
    line-height: 1.875rem;
  }
  .photo-view {
    img {
      margin: 10px;
    }
  }
}
</style>

// 获取到位置了，点击加入购物车 没有球
// 属性也在变，但是没有球，动画也执行了

// 排除方案：  注释所动画

// APP组件中已经有了动画  app组件中全局的类样式的动画与小球的钩子动画冲突了。

// 写动画，在实例Vm的时候加name属性,可变成 app-enter ，避免动画冲突