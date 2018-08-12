<template>
	<div class="house">
		<h2>图片点击预览</h2>
		<template>
  			<vue-preview :slides="img" class="view"></vue-preview>
		</template>
	</div>
</template>
<style lang="scss" scoped scoped>
	// *{
	// 	margin: 0;
	// 	padding: 0;
	// }
	// .view a img{
	// 	width: 30.33%;
	// 	margin-left:10px;
	// 	float:left;
	// }
	// h2{
	// 	text-align: center;
	// }
</style>
<script>
	export default {
		data(){
			return {
				img:[
					{
           			src: '/img/images/c1.jpg',
           			msrc: '/img/images/c1.jpg',
           			alt: 'picture1',
           			title: '美图一',
           			w: 600,
            			h: 400
       				   },
       				 {
           				src: 'img/images/c2.jpg',
           				msrc: 'img/images/c2.jpg',
           				alt: 'picture2',
           				title: '美图二',
           				w: 1200,
           				h: 900
         			},
       				 {
           				src: 'img/images/c3.jpg',
           				msrc: 'img/images/c3.jpg',
           				alt: 'picture2',
           				title: '美图三',
           				w: 1200,
           				h: 900
         			},
       				 {
           				src: 'img/images/c4.jpg',
           				msrc: 'img/images/c4.jpg',
           				alt: 'picture2',
           				title: '美图四',
           				w: 1200,
           				h: 900
         			},
       				 {
           				src: 'img/images/c5.jpg',
           				msrc: 'img/images/c5.jpg',
           				alt: 'picture2',
           				title: '美图五',
           				w: 1200,
           				h: 900
         			},
       				 {
           				src: 'img/images/c6.jpg',
           				msrc: 'img/images/c6.jpg',
           				alt: 'picture2',
           				title: '美图六',
           				w: 1200,
           				h: 900
         			},
       				 {
           				src: 'img/images/c7.jpg',
           				msrc: 'img/images/c7.jpg',
           				alt: 'picture2',
           				title: '美图七',
           				w: 1200,
           				h: 900
         			},
       				 {
           				src: 'img/images/c8.jpg',
           				msrc: 'img/images/c8.jpg',
           				alt: 'picture2',
           				title: '美图八',
           				w: 1200,
           				h: 900
         			}

				]
			}
		}
	}
</script>
