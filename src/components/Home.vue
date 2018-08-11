 <template>
	<div class="appHome">
			<ul class="icon">
				<router-link v-for="(v,j) in icons" :to='"/list/type/"+v.id' tag="li" :key="v.id">
					<img :src="'img/icon/'+v.img" alt="">
					<p>{{v.text}}</p>					
				</router-link>
			</ul>		
		<!-- 广告模板 -->
			<ul class="ad">
				<router-link v-for="(v,k) in ad" tag="li" :to="		'/detail/'+v.id" :key="k">
					<h3 :class="'color-'+k">{{ v.title }}</h3>
					<p>{{ v.description }}</p>
					<img :src="'img/ad/'+v.url" >
				</router-link>
			</ul>
			<h2 class="title">猜你喜欢</h2>
			<ul class="like">
				<router-link v-for="(v,k) in list" tag="li" :to="'/ditial/'+v.id">
					<img :src="'img/list/'+v.img">
					<div class="content">
						<h4>{{v.title}}</h4>
						<span class="price">{{v.price}}元</span>
						<span class="menprice">门市价:{{v.originPrice}}元</span>
						<span class="count">销量{{v.sales}}</span>
					</div>
				</router-link>
			</ul>
	</div>
</template>
<style lang="scss">
*{
	margin: 0;
	padding: 0;
	list-style:none;
}
@import "../base.scss";
	.icon{
		overflow: hidden;
		li{
			@include clearfix;
			width:20%;
			float:left;
			img {
				width:75%;
				height:75%;
  			}
		}
	}
	.color-0{
	color:red;
	}
	.color-1{
	color:green;
	}
	.color-2{
	color:purple;
	}
	.ad{
		border-top:10px solid #eee;
		border-bottm:10px solid #eee;
		display:flex;
		li{
			border-right:3px solid #ccc;
			flex:1;
			img{
				width:60%;
			}
			h3 {
				padding:10px 0;
			}
			p{
				padding-bottom:10px;
			}
			&:last-child{
				border-right:none;
			}
		}


	}
	.like{
		@extend %item
			
	}
</style>
<script>
	export default {
		data(){
			
				return {
					icons: [
					{ img: '01.png', text: '美食', id: 1 },
					{ img: '02.png', text: '电影', id: 2 },
					{ img: '03.png', text: '酒店', id: 3 },
					{ img: '04.png', text: '休闲', id: 4 },
					{ img: '05.png', text: '外卖', id: 5 },
					{ img: '06.png', text: 'KTV', id: 6 },
					{ img: '07.png', text: '周边游', id: 7 },
					{ img: '08.png', text: '丽人', id: 8 },
					{ img: '09.png', text: '小吃', id: 9 },
					{ img: '10.png', text: '火车票', id: 10 }
				],
				ad:"",
				list:""
			}
		},
		created(){
			
		}
}
</script>