<template>
	<ul>
		<li v-for="(item,index) in list" :key="index">
			<p class="content">{{item.content}}</p>
			<span class="time">{{item.time}}</span>
			<span class="user">{{item.user}}</span>
		</li>
	</ul>
</template>
<style scoped lang="scss">
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
				console.log(this.list)
			})
		}
	}
</script>
