<template>
	<li>
		<slot></slot>
	</li>
</template>
<style scoped>
	  li {
  	list-style:none;
  	width:33.33333%;
  	height:123px;
  	float:left;
  	/*clear:left;*/
  }
</style>
<script>
	export default {
		name:"my-li"
	}
</script>