export default {
  allCount(state) {
    let c = 0;
    state.car.forEach( item => {
      c+= item.count;
    } )
    return c;
  },
  goodsCount(state) {
    let count = {}
    state.car.forEach( item => {
      count[item.id] = item.count
    })
    return count;
  },
  goodsState(state) {
    let selected = {}
    state.car.forEach( item => {
      selected[item.id] = item.selected
    })
    return selected;
  }

}