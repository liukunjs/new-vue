<template>
	<div>
		<div class="t">
			<div class="header">
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li>5</li>
			<li>6</li>
			<li>7</li>
			<li>8</li>
			<li>9</li>
			<li>10</li>
		</div>
		</div>
	</div>
</template>
<style  scoped>
::-webkit-scrollbar{
	display: none;
}
		.t{
			width: 100%;
			overflow: auto;
		}
		.header{
			width:800px;
			height:20px;

				}
			li{
		width: 10%;
		height:20px;
		float:left;
		background-color: red;
		display: inline-block;
	}
</style>
<script>
	export default{
			created(){

				this.$http.get("/data/0.json")
				.then(({data})=>{
					console.log(data)
				})
				.catch((err)=>{
					console.log(err)
				})
			}
	}
</script>

