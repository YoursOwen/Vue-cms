<template>
  <div>
    <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for='item in listMsg' :key="item.id">
        <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" v-bind:src="item.img_url">
            <div class="mui-media-body">
                {{item.title}}
                <p class='mui-ellipsis'>
                  <span>发表时间:{{item.add_time}}</span>
                  <span>点击:{{item.click}}次</span>
                  </p>
            </div>
        </a>
    </li>
</ul>


  </div>
</template>

<script>
export default {
  data() {
    return {
      listMsg:[],
    }
  },
  created() {
    this.getInfoHandle()
  },
  methods: {
    getInfoHandle () {
      this.$http.get('api/getnewslist')
      .then(res => {
        if(res.status === 200 ) {
          this.listMsg = res.body.message
        }
      })
    }
  },

}
</script>

<style lang="less" scoped>
.mui-media-body {
  font-size: 14px;
  font-weight: bold;
  .mui-ellipsis {
    display: flex;
    justify-content: space-between;
    span {
      color: #0094ff;
      font-size: 12px;
      font-weight: 400;
    }
  }
}

</style>
