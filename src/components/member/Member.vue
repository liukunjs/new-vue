<template>
	<div>
		<div class="t">
			<ul class="header">
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
				<li>5</li>
			</ul>
		</div>
	</div>
</template>
<style  scoped lang="scss">
::-webkit-scrollbar{
	display: none;
}
*{
	margin: 0;
	padding: 0;
}
		.t{
			width: 100%;
			overflow: auto;
		}
		.header{
			height:20px;
			width: 800px;
			}
		li{
		width: 20%;
		height: 30px;
		float: left;
		display: inline-block;
		text-align: center;
		background-color: #ccc;
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

