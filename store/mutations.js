export default {
  addToCar(state,goodsInfo) {
    // 如果之前有的话，就只需要更新count
    let isPush = true;
    state.car.some( item => {
      if(item.id === goodsInfo.id) {
        item.count += goodsInfo.count;
        isPush = false;
        return true;
      }
    })

    if(isPush) {
      state.car.push(goodsInfo)
    }

    // 如果之前没有，就需要推进去
  },
}