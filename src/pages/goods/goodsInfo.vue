<template>
  <div class="goodsInfoContainer">

   <transition>
      <div class="ball" v-show="ballFlag"></div>
   </transition>

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-swipe :auto="4000" class="mint-swipe">
            <mt-swipe-item v-for='(item,index) in lunbo' :key="index">
              <img :src="item.src" alt="">
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">商品名称</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>¥{{ goodsInfo.market_price}}</del>&nbsp;&nbsp;
            销售价&nbsp;&nbsp;
            <span>¥{{ goodsInfo.sell_price}}</span>
          </p>
          <div class="buy-count">
            购买数量：
            <div class="mui-numbox" data-numbox-min='0' data-numbox-max='100'>
              <!-- "-"按钮，点击可减小当前数值 -->
              <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
              <input class="mui-numbox-input" type="number" value="1" />
              <!-- "+"按钮，点击可增大当前数值 -->
              <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
            </div>
          </div>
          <p>
            <mt-button type="primary" size='small'>立即购买</mt-button>
            <mt-button type="danger" size='small'>加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{ goodsInfo.goods_no}}</p>
          <p>库存情况：{{ goodsInfo.stock_quantity}}件</p>
          <p>上架时间：{{ goodsInfo.add_time | timeFliter }}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size='large' plain >图文介绍</mt-button>
        <mt-button type="danger" size="large" plain >商品评论</mt-button>


      </div>
    </div>

  </div>

</template>

<script>
  export default {
    data() {
      return {
        goodsInfo: {},
        id: this.$route.params.id,
        lunbo: [],
        ballFlag:false,
      }
    },
    created() {
      this.getLunboHandler()
      this.getGoodsInfoHandler()
    },
    methods: {
      getLunboHandler() {
        this.$http.get('api/getthumimages/' + this.id)
          .then(res => {
            if (res.body.status === 0) {
              this.lunbo = res.body.message
            }
          })
      },
      getGoodsInfoHandler() {
        this.$http.get('api/goods/getinfo/'+this.id)
        .then(res => {
          console.log(res)
          if(res.body.status === 0) {
            this.goodsInfo = res.body.message[0]
          }
        })
      }
    },
  }

</script>

<style lang="less" scoped>
  .goodsInfoContainer {
    .ball {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: red;
      position: absolute;
      left: 153px;
      top: 391px;
      z-index: 999;
    }
    .mint-swipe {
      height: 200px;

      img {
        width: 100%;
        height: 100%;
      }
    }
    .price {
      span {
        color: red;
        font-weight: bold;
        font-size: 16px;
      }
    }
    .buy-count {
      margin-bottom: 10px;
      color: #8f8f94;
      .mui-numbox {
        position: relative;
        display: inline-block;
        overflow: hidden;
      }
    }
     .mui-card-footer {
      display: block;
    button {
      margin: 15px 0;
    }
  }
  }

</style>
