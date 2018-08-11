//引入 vue  vue-router 并安装
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
//引入模板
import Home from "./components/home/Home.vue"
import Shopcart from "./components/shopcart/Shopcart.vue"
import Member from "./components/member/Member.vue"
import Search from "./components/search/Search.vue"
import Newslist from "./components/newslist/Newslist.vue"
//路由规则
let  routes = [
		{
			name:"home",
			path:"/home",
			component:Home
		},
		{
			name:"shopcart",
			path:"/shopcart",
			component:Shopcart
		},
		{
			name:"member",
			path:"/member",
			component:Member
		},
		{
			name:"search",
			path:"/search",
			component:Search
		},
		{
			//通过 {}名字的名字获取的时候多层情如/news/list况用打点调用news.list
			name:"news.list",
			path:"/news/list",
			component:Newslist
		}
]
let router = new VueRouter({routes})
export default router
