<template>
  <div class="goodsDesc-container">
      <h3 class="title">{{ desc.title }}</h3>
      <hr>
      <div v-html="desc.content" class="content" id="content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desc:{}
    }
  },
  created() {
    this.getDescHandler()
  },
  methods: {
    getDescHandler() {
      this.$http.get('api/goods/getdesc/'+this.$route.params.id).then(res=>{
        console.log(res)
        if(res.body.status === 0) {
          this.desc = res.body.message[0]
        }
      })
    }
  },

}
</script>

<style lang="less" scoped>

.goodsDesc-container {
  padding: 5px;
  .title {
    font-size: 14px;
    margin: 15px 0;
    color: #226aff;
    text-align: center;
  }
  #content {
    img {
      width: 100%;
    }
  }
}
</style>
