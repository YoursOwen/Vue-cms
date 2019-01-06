<template>
  <div class="commentContainer">
    <h3>发表评论</h3>
    <hr>
    <textarea name="" id="" placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-header">
        第1楼  用户：匿名用户  发表时间：2019-01-06 18:55:25
        </div>
        <div class="cmt-body">
          哈哈哈测试哦
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commentMsg:[],
    }
  },
  props:['id'],
  created() {
    this.getCommentsHandle()
  },
  methods:{
    getCommentsHandle() {
      this.$http.get(`api/getcomments/${this.id}?pageindex=1`)
      .then( res => {
        if(res.body.status === 0) {
          this.commentMsg = res.body.message
        }
      })

    }
  }

}
</script>

<style lang="less" scope>
.commentContainer {
  h3 {
    text-align: left;
    font-size: 18px;
  }
  textarea {
    height: 85px;
    font-size: 14px;
    margin-bottom: 5px;
    color: #ccc;

  }
  .cmt-list {
    margin: 5px 0;
    text-align: left;
    .cmt-item {
      .cmt-header {
        background-color: #e7e5e5;
        line-height:30px;
        font-size: 12px;
      }
      .cmt-body {
        line-height: 30px;
        text-indent: 2em;
        font-size: 12px;
      }
    }
  }
}
</style>