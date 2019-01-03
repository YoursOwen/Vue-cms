<template>
  <div id="app" class="app-container">

    <!-- 顶部header -->
    <mt-header fixed title="固定在顶部"></mt-header>

		<!-- 过渡动画 -->
    <transition>
		<!-- 中间router -->
		<!-- 匹配规则都有的情况下，要给个坑占位置 -->
		<router-view></router-view>
		</transition>

    <!-- 底部nav -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">3</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			 </router-link>
		</nav>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
.app-container {
	padding-top: 40px;
	padding-bottom: 60px;
	overflow-x: hidden;
}

.v-enter {
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to {
	opacity: 0;
	transform: translateX(-100%);
	// 移动的时候会占位置，所以要absolute空出位置
	position: absolute;
}
.v-enter-active,
.v-leave-active {
	transition: all .5s ease-in
}



</style>

