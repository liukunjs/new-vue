<template>
    <div>
    	<mt-header fix title="刘家小院"></mt-header>
   	  <router-view></router-view>
   		 <mt-tabbar v-model="selected">
			<mt-tab-item id="home" >
			 <img slot="icon" src="../../public/img/icon/10.png" @click="changeHash">
			 首页
			</mt-tab-item>
			<mt-tab-item id="member" >
			 <img slot="icon" src="../../public/img/icon/04.png" @click="changeHash">
			 vip
			</mt-tab-item>
			<mt-tab-item id="shopcart" >
			 <img slot="icon" src="../../public/img/icon/05.png" @click="changeHash">
			 购物车
			</mt-tab-item>
			<mt-tab-item id="search">
			 <img slot="icon" src="../../public/img/icon/02.png" @click="changeHash">
			 查找
		 </mt-tab-item>
	  </mt-tabbar>
    </div>
</template>
<style >
div.mint-tabbar{
	position:fixed;
	left:0;
	bottom:0;
}
</style>
<script>
export default {
	 data(){
	 	return {
	 		selected:""
	 	}
	 },
	 //watch是一个对象
	 watch:{
	 	//监听谁，谁就是个函数
	 	// selected(newValue, oldValue){
	 	// 	console.log(this.$router)
	 	// 	this.$router.push({
	 	// 		name:newValue
	 	// 	})
	 	// }
	 },
	methods:{
		 changeHash() {
		 	//vue渲染完成后要的事情
		 	this.$nextTick(function(){
		 		this.$router.push({
		 			name:this.selected
		 		})
		 	})
		 	// console.log(1111)
	 		console.log(this.selected)
		 }
	}
}
</script>
