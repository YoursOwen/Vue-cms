export default {
  allCount(state) {
    let c = 0;
    state.car.forEach( item => {

      c+= item.count;

    } )
    return c;
  }
}