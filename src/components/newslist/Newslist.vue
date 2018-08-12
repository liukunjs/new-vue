<template>
	<ul>
		<router-link
		v-for="(item,index) in list" 
		:key="index" 
		:to="{name:'other.list',params:{
		id:index
	}}"
		tag="li"
	>
			<p class="content">{{item.content}}</p>
			<span class="time">{{item.time}}</span>
			<span class="user">{{item.user}}</span>
		</router-link>
	</ul>
</template>
<style scoped lang="scss" >
	li {
		list-style:none;
		.time{
			float:right;
		}
	}
</style>
<script>
	export default {
		data(){
			return {
				list:[]
			}
		},
		created(){
			this.$http.get("/data/comment.json")
			.then(({data}) => {
				this.list = data.list
			})
		}
	}
</script>
