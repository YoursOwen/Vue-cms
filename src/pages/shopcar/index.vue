<template>
  <div class='shopcar-container'>
    <div class="mui-card" v-for="item in listCar" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="$store.getters.goodsState[item.id]"></mt-switch>
            <img :src="item.thumb_path" alt="">
            <div class="info">
              <h3>{{ item.title }}</h3>
              <p>￥{{ item.sell_price }}</p>
              <div>
                <div class="mui-numbox" data-numbox-min='1' data-numbox-max='60' >
                <!-- "-"按钮，点击可减小当前数值 -->
                <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
                <input class="mui-numbox-input" type="number" v-model="$store.getters.goodsCount[item.id]"/>
                <!-- "+"按钮，点击可增大当前数值 -->
                <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
              </div>
              <a href="#">删除</a>
              </div>
            </div>
					</div>
				</div>
		</div>


    <!-- 结算交易 -->
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner qucik">
						<div class="left">
              <p>总计（不含运费）</p>
              <p>已勾选商品 <span>999</span> 件， 总价<span>222</span></p>
            </div>
            <mt-button type="danger" size="small">结算</mt-button>
					</div>
				</div>
		</div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      value:true,
      listCar:[],
    }
  },
  created() {
    this.getshopCarList()
  },
  methods: {

    getshopCarList() {

      let car = this.$store.state.car;

      let id = [];

      car.forEach( item => {
        id.push(item.id)
      })

      // 函数内部，没有数据就return掉
      if(id.length == 0) {
        return;
      }

      this.$http.get('api/goods/getshopcarlist/'+id.join(","))
      .then( res => {
        if(res.body.status === 0) {
          this.listCar = res.body.message
        }
      })
    }
  },
}
</script>

<style lang="less" scoped>

.shopcar-container {
  .mui-card-content-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 60px;
    }
    .info {
      h3 {
        font-size: 14px;
      }
      p {
        color: red;
        font-weight: bold;
        margin-bottom: 5px;
      }
    }
    .left {
      span {
        color: red;
        font-weight: bold;
        font-size: 16px;
      }
    }
  }
}
</style>
