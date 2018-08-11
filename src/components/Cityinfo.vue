<template>
	<div class="dital">
		<div class="header">
			<img :src="city.images">
			<h2>{{city.cn_name}}</h2>
			<p>{{city.city_name}}</p>
		</div>
		<div class="list">
			<ul>
				<li v-for="(v,k) in list" :key="k">
					<img :src="v.images">
					<p class="title"><span>景+酒 </span>酒店套餐</p>
					<p class="info">{{v.alias}}</p>
					<p class="price">{{"￥"+v.min_price}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import "../base.scss";
	*{
	margin: 0;
	padding: 0;
	}
.header{
	color:#fff;
	position:relative;
	img{
		width: 100%;
		height:190px;
		background-size:cover;	
	}
	h2{
		position:absolute;
		font-size:40px;
		top:50%;
		left:50%;
		transform: translate(-50%,-50%);
	}
	p{
		position:absolute;
		font-size:25px;
		top:50%;
		left:50%;
		transform: translate(-50%,-50%);
		top:145px;
	}

}
.list {
		ul {
			li{
				border-bottom:1px solid #ccc;
				margin-top:20px;
				width:42.5%;
				margin-left:5%;
				height:240px;
				float:left;
				img{
					height:122px;
					width:100%;
				}
				.info{
				display:-webkit-box;
				-webkit-box-orient:vertical;   
				-webkit-line-clamp:2;   
				text-overflow:ellipsis;   
				overflow:hidden;   
				word-break:break-all;  
				}
			
				.title{
					font-size:14px;
					span{
					color:skyblue;
					}

				}
				.price{
					color:red;
					font-size:23px;
				}
			}
		}
}
</style>
<script>
	export default{
		data(){
			return {
					city:{},
					list:[]
			}
		},
		created(){
			this.$http.get("data/detail.json")
			.then((data)=>{
				this.city = data.data.data
				this.list = data.data.list
				console.log(this.city)
				console.log(this.list)
			})
		
		},

	}
</script>	
