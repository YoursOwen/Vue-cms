<template>
  <div id="app" class="app-container">

    <!-- 顶部header -->
    <mt-header fixed title="固定在顶部"></mt-header>

		<!-- 过渡动画 -->
    <transition name="app">
		<!-- 中间router -->
		<!-- 匹配规则都有的情况下，要给个坑占位置 -->
		<router-view></router-view>
		</transition>

    <!-- 底部nav -->
    <nav class="mui-bar mui-bar-tab">
			<!-- mui-tab-item 类名有冲突，会导致没有办法切换，需要修改类名 -->
			<router-link class="mui-tab-item1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/member">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">3</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			 </router-link>
		</nav>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
#app {
	background-color: #fff;
}
.app-container {
	padding-top: 40px;
	padding-bottom: 60px;
	overflow-x: hidden;
}
.app-enter {
	opacity: 0;
	transform: translateX(100%);
}
.app-leave-to {
	opacity: 0;
	transform: translateX(-100%);
	// 移动的时候会占位置，所以要absolute空出位置
	position: absolute;
}
.app-enter-active,
.app-leave-active {
	transition: all .5s ease-in
}


.mui-bar-tab .mui-tab-item1.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item1 {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item1 .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}


</style>

