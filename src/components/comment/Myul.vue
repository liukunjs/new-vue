<template>
	<!-- 定义UL模板不论几个 子元素，使用slot -->
	<ul>
		<slot></slot>
	</ul>
</template>
<style scoped>
	ul{
		margin: 0;
		padding: 0;
		overflow: hidden;
	}
</style>
<script>
export default {
	name:"my-ul",
	data(){
		return {

		}
	}
}
</script>