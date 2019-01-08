<template>
  <div class="photolistContainer">
		<!-- 顶部滑动区域 -->
    <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="{'mui-control-item':true,'mui-active':index == 0}" @tap="getImg(item.id)"
						href="#item1mobile" data-wid="tab-top-subpage-1.html" v-for="(item,index) in photoCategory" :key="item.id">
							{{ item.title }}
						</a>
					</div>
				</div>

		<!-- 图片展示区 -->
		<ul class="photo-list">
			<router-link :to="'/home/photoInfo/'+item.id" v-for="item in list" :key="item.id" tag="li">
			<img v-lazy="item.img_url">
			<div class="img-info">
				<h3 class="info-title">
					{{ item.title }}
				</h3>
				<div class="info-body">
					{{ item.zhaiyao }}
				</div>
			</div>
			</router-link>
		</ul>

			</div>
  </div>
</template>

<script>

import mui from '../../lib/mui/js/mui.min.js'
 mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});

export default {
	data() {
		return {
			photoCategory:[],
			cateid:0,
			list:[],
		}
	},
	created() {
		this.getImgCategory()
		this.getImagesHandle(this.cateid)
	},
	methods: {
		getImgCategory() {
			this.$http.get('api/getimgcategory')
			.then( res => {

				if(res.body.status === 0) {
					res.body.message.unshift({title:'全部',id:0})
					this.photoCategory = res.body.message
				}
			})
		},
		getImg(id) {
			console.log(id)
			this.list = [];
			this.getImagesHandle(id);
		},
		getImagesHandle() {
			this.$http.get(`api/getimages/${this.cateid}`)
			.then( res => {
				if(res.body.status === 0) {
					this.list = res.body.message
				}
			} )
		}
	},


}
</script>

<style lang="less" scoped>
* {
	touch-action: pan-y;

}
.photo-list {
	list-style: none;
	margin: 0;
	padding:10px;
	padding-bottom: 0;

	li {
		background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
		position: relative;

		img {
			width: 100%;
			vertical-align: middle;
		}
		.img-info {
			position: absolute;
			bottom: 0;
			font-size: 12px;
			color: #ffffff;
			background-color: rgba(0, 0, 0, .4);
			text-align: left;

			.info-title {
				font-size: 14px;
			}
		}
	}
}
</style>



