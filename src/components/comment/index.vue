<template>
  <div class="commentContainer">
    <h3>发表评论</h3>
    <hr>
    <textarea name="" id="" placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,index) in commentMsg" :key="index">
        <div class="cmt-header">
        第{{ index+1 }}楼  用户：{{ item.user_name }}  发表时间：{{ item.add_time | timeFliter }}
        </div>
        <div class="cmt-body">
          {{ item.content }}
        </div>
      </div>
    </div>
    <mt-button type="danger" size='large' class="addmore" @click="addmore">加载更多</mt-button>
  </div>


</template>

<script>
import { Toast } from 'mint-ui';

export default {
  data() {
    return {
      commentMsg:[],
      pageindex:1,
      msg:"", //评论输入的内容
    }
  },
  props:['id'],
  created() {
    this.getCommentsHandle()
  },
  // updated() {
  //   this.getCommentsHandle()
  // },
  methods:{
    getCommentsHandle() {
      this.$http.get(`api/getcomments/${this.id}?pageindex=${this.pageindex}`)
      .then( res => {
        if(res.body.status === 0) {

          //通过数组的concat方法将服务器新获取的数据与老数据拼接
          this.commentMsg = this.commentMsg.concat(res.body.message);
        } else {
          Toast("评论数据获取失败！")
        }
      })
    },
    addmore() {
      this.pageindex++;
      this.getCommentsHandle();
    },
    postComment() {
      if(this.msg.trim() == "") {
        return Toast("请输入有效内容！")
      }

      this.$http.post(`api/postcomment/${this.id}`,{content:this.msg.trim()})
      .then( res => {
        if(res.body.status === 0) {
          //添加成功后重新加载
          //1.清空数据commentMsg
          this.commentMsg = []
          //2.重新初始化页数
          this.pageindex = 1
          //3.清空textarea,这就是为什么要用v-model进行双向数据绑定
          this.msg = ""
          //4.重新获取数据
          this.getCommentsHandle()
        } else {
          Toast("评论添加失败哦！")
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
  .addmore {
    background-color: transparent;
    border: 1px solid orangered;
    color: orangered;
  }
}
</style>