<template>
	<div>
		<mt-swipe :auto="4000" style="height:200px;">
 			<mt-swipe-item v-for="(item,index) in img" :key="index">
 				<img class="img" :src="item.src">
 			</mt-swipe-item>
		</mt-swipe>
		<my-ul class="giod">
			<my-li class="lis" v-for="(item,index) in list">
				<router-link class="pic" :to="item.router" tag="span">
					<img :src="item.src">
				<p class="title">{{item.value}}</p>
				</router-link>
			</my-li>
		</my-ul>
	</div>
</template>
<style lang="scss" scoped >
  div.mint-swipe-items-wrap {
		 img.img {
			height:100%;
			width:100%;
  		}
  }
  .pic{
  	width: 60px;
  	height: 60px;
	margin:0 auto;
	margin-top:20px;
	display:block;
	img{
		width: 100%;
		height: 100%;
	}
  }
	.lis {
	p{
		text-align:center;
		margin-bottom:20px;
	}
}

</style>
<script>
	export default{
		data(){
			return {
				img:"",
				list:[
				{src:"/img/icon/01.png",value:"新闻",router:{name:'news.list'}},
				{src:"/img/icon/02.png",value:"新闻",router:{name:'news.list'}},
				{src:"/img/icon/03.png",value:"新闻",router:{name:'news.list'}},
				{src:"/img/icon/04.png",value:"新闻",router:{name:'news.list'}},
				{src:"/img/icon/05.png",value:"新闻",router:{name:'news.list'}},
				{src:"/img/icon/06.png",value:"新闻",router:{name:'news.list'}},
				]
			}
		},
		created(){
			this.$http.get("/data/product.json")
			.then(({data})=>{
				this.img = data.img
			})
		}
	}
</script>

