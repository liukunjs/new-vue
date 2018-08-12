<template>
	<div class="Otherlist">
			<div class="t">
				<ul class="header">
					<router-link 
					class="swiper" 
					 v-for="(item,index) in list"
					:to="item.router" 
					:key="item.id"
					tag="li">{{item.title}}</router-link>
				</ul>
		</div>
		<ul class="info">
			<li 
			v-for="(item,index) in msg" 
			:key="item.id">
				<p>{{item.title}}</p>
				<img :src="item.src">
			</li>
		</ul>
	</div>
</template>
<style scoped lang="scss" >
	::-webkit-scrollbar{
	display: none;
}
*{
	margin: 0;
	padding: 0;
	list-style:none;
}
		.t{
			width: 100%;
			overflow: auto;
		}
		.header{
			height:20px;
			width: 800px;
			}
		.swiper{
		width: 20%;
		height: 30px;
		float: left;
		display: inline-block;
		text-align: center;
		background-color: #ccc;
	}
	img{
		width:100%;
		height:200px;
	}
</style>
<script>
export default {
	data(){
		return {
			list:[],
			msg:[]
		}
	},
	created(){
		// console.log(11111,this.$route)
		// this.$http.get("/data/2")
		this.$http.get("/data/list.json")
		.then(({data})=>{
			this.list = data.list
			console.log(this.list.length)
		})
		.catch((data)=>{
			console.log(data +"请求头部错误")
		})
		this.getMsg(0)
	},
	 beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    	var id = to.params.id
    	this.getMsg(id)
    	next()
    	if(id==0){
    		console.log(1)
    		this.$toast({
  			message: '操作成功',
  			iconClass: 'iconClass',

});
    	}
  },
 methods:{
 	 getMsg(id){
  		this.$http.get("/data/"+id+".json")
    	.then(({data})=>{
    		this.msg = data.data
    		console.log(this.msg)
    	})
  }
 }
}
</script>
