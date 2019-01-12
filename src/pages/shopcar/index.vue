<template>
  <div class='shopcar-container'>
    <div class="mui-card" v-for="(item,i) in listCar" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="$store.getters.goodsState[item.id]"
            @change='changeSelected(item.id,$store.getters.goodsState[item.id])'
            ></mt-switch>
            <img :src="item.thumb_path" alt="">
            <div class="info">
              <h3>{{ item.title }}</h3>
              <p>￥{{ item.sell_price }}</p>
              <div>
                <div class="num-box">
                  <input type="button" value="-" @click="sub(item.id,i)">
                  <input type="text" :value="$store.getters.goodsCount[item.id]" ref="inputBox" @change='changeCount(item.id,i)'>
                  <input type="button" value="+" @click="add(item.id,i)">
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
              <p>已勾选商品 <span>{{$store.getters.totalCar.totalCount}}</span> 件， 总价<span>{{$store.getters.totalCar.totalPrice}}</span></p>
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
    },
    changeSelected(id,selected) {
      let select = {id:id,selected:selected}
      this.$store.commit('changeSelected',select)
    },
    add(id,i) {
      // 需要用索引来决定是那个input框受影响
      // console.log(this.$refs.inputBox) 返回一个数组
      let inputBox = this.$refs.inputBox[i]
      // if(inputBox.value <=1) return;
      inputBox.value++;

      this.changeCount(id,i)

    },
    sub(id,i) {
      let inputBox = this.$refs.inputBox[i]
      if(inputBox.value <=1) return;
      inputBox.value--;

      this.changeCount(id,i)
    },
    changeCount(id,i) {
      console.log("数量被改变了----",id,i)
       let goodsCount = this.$refs.inputBox[i].value
      this.$store.commit("changeCount",{id,count:goodsCount})
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
