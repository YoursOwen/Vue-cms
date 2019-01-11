export default {
  addToCar(state,goodsInfo) {

    // 如果之前有的话，就只需要更新count

    let isPush = true;
    state.car.some( item => {
      if(item.id === goodsInfo.id) {
        item.count += goodsInfo.count;

        return isPush = false;
      }
    })

     // 如果之前没有，就需要推进去
    if(isPush) {
      state.car.push(goodsInfo)
    }

    //()中不应该使用goodsInfo，因为goods.info=>{},而是把state.car
    localStorage.setItem('car',JSON.stringify(state.car));
  },
}