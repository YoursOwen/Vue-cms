<template>
  <div class="goodsInfoContainer">

   <transition @before-enter="bEnter" @enter='enter' @after-enter="aEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
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
      <div class="mui-card-header">{{ goodsInfo.title }}</div>
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
            <div class="num-box">

               <!-- || 一般用于默认值的处理 -->
              <!-- && 如果前面的结果为false , 后面的代码就不会执行 -->
                  <input type="button" value="-" @click="buyCount>1&&buyCount--" :disabled="buyCount<=1">
                  <input type="text" v-model="buyCount" ref="inputBox" >
                  <input type="button" value="+" @click="buyCount<goodsInfo.stock_quantity&&buyCount++">
                </div>
          </div>
          <p>
            <mt-button type="primary" size='small'>立即购买</mt-button>
            <mt-button type="danger" size='small' @click="ballRun">加入购物车</mt-button>
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
        max:'',
        buyCount:1,
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
          if(res.body.status === 0) {
            this.goodsInfo = res.body.message[0]
            this.max = res.body.message[0].stock_quantity
          }
        })
      },
      ballRun() {
        //将商品加入购物车的时候控制小球
        this.ballFlag = !this.ballFlag

        let goodsInfo = {id:this.id ,count: this.buyCount,
        price: this.goodsInfo.sell_price,selected: true}

        this.$store.commit('addToCar',goodsInfo)
      },
      bEnter(el) {
       el.style.transform = 'translate(0,0)'

      },
      enter(el,done) {
        el.offsetHeight;

        // el.style.transform = 'translate(73px,242px)'

        //获取小球在页面位置
        const ballPosition = this.$refs.ball.getBoundingClientRect()
        //获取徽标在页面位置
        const badgePosition = document.querySelector(".mui-badge").getBoundingClientRect()

        const xDist = badgePosition.left - ballPosition.left;
        const yDist = badgePosition.top - ballPosition.top;

        el.style.transform = `translate(${xDist}px,${yDist}px)`

        el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)"

        done()
      },
      aEnter(el) {
        this.ballFlag = !this.ballFlag;
      },
      change() {
        this.buyCount = parseInt(this.$refs.numBox.value)
      },
      sub(){},
      add(){}
    },
    watch: {
      'max'(newVal,oldVal) {
        // mui('.mui-numbox').numbox().setOption('max',this.max)
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
     .num-box {
        position: relative;
        display: inline-block;
        overflow: hidden;
        height: 35px;
        input[type="text"] {
          width: 50px;
          height: 100%;
          text-align: center;
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        input[type="button"] {
          width: 40px;
          height: 100%;
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
