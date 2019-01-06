<template>
  <div class="InfoContainer">
    <h3>{{ newsInfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间:{{ newsInfo.add_time | timeFliter }}</span>
      <span>点击:{{ newsInfo.click }}次</span>
    </p>
    <hr>

    <div v-html="newsInfo.content"></div>

    <h3>发表评论</h3>
    <hr>
    <textarea name="" id="" placeholder="请输入要BB的内容（最多吐槽120字）"></textarea>


  </div>
</template>

<script>
export default {
  data() {
    return {
      id:this.$route.params.id,
      newsInfo:{},
    }
  },
  created() {
    this.getNewsInfo()
  },
  methods: {
    getNewsInfo () {
      //notice:不要写/api/getnew/${this.id} ,以 / 开头，会以绝对路径访问
      this.$http.get(`api/getnew/${this.id}`)
      .then(res => {
       if(res.status === 200 ) {
         this.newsInfo = res.body.message[0]
       }
    })
  },
  }
}
</script>

<style lang="less" scoped>
.InfoContainer {
  text-align: center;
  h3 {
    color: #333;
    font-size:16px;
    margin: 15px 0;
  }
  .subtitle {
    display:flex;
    justify-content: space-between;

    span {
      color:#226aff;

    }
  }

  textarea {
    height: 85px;
    font-size: 14px;
    color: #ccc;

  }

}

</style>

