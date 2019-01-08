<template>
  <div class="good-list">
    <div class="good-item" v-for="item in goodsList" :key="item.id" @tap="goDetail(item.id)">
      <img :src="item.img_url" alt="">
      <h3 class="title">{{ item.title }}</h3>
      <div class="info">
        <p class='price'>
          <span>{{ item.sell_price }}</span>
          <del>{{ item.market_price }}</del>
        </p>
        <p class='hot'>
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </div>

    <mt-button type="danger" size='large' class="addmore" @click="addmore" v-if="hasmore">加载更多</mt-button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList:[],
      pageIndex:1,
      hasmore:true,
    }
  },
  created() {
    this.getGoodsHandle()
  },
  methods: {
    getGoodsHandle() {
      this.$http.get('api/getgoods?pageindex='+this.pageIndex)
      .then( res => {
        if(res.body.message.length < 10) {
          this.hasmore = false
        }
        this.goodsList = this.goodsList.concat(res.body.message)

      })
    },
    addmore() {
      this.pageIndex++;
       this.getGoodsHandle();
    },
    goDetail(id) {
      this.$router.push({ name: 'goodsInfo', params: { id:id }})
    }
  },

}
</script>

<style lang="less" scoped>
.good-list {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: space-between;
  .good-item {
    width: 49%;
    border: 1px solid #ccc;
    margin: 5px 0;
    box-shadow: 0 0 8px #ccc;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;

    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }
    .info {
      background-color: #eee;
      .price {
        span {
          color: red;
          font-size: 16px;
          font-weight: bold
        }
        del {
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .hot {
        display: flex;
        justify-content: space-between;
      }
    }

  }
  .addmore {
    background-color: transparent;
    border: 1px solid orangered;
    color: orangered;
    margin: 5px 0;

  }
}
</style>
