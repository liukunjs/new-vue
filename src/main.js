import Vue from 'vue'
import router from './router.js'
import App from './components/App.vue'
import store from './store'
import Axios from "axios"
import Mint from "mint-ui"
//可以通过 Axios 获设置公共的url 为：Axios.default.baseRRL="http：//www.aaa/aa/"
//配置请求拦截器显示loading图标
Axios.interceptors.request.use(config=>{
	Mint.Indicator.open({
		text:"玩命加载中.."
	});
	return config
})
Axios.interceptors.response.use(respones=>{
	Mint.Indicator.close();
	return respones
})
//引入公用样式
import "./assets/css/golbal.css"
import "mint-ui/lib/style.css"
import Myul from "./components/comment/Myul.vue"
import Myli from "./components/comment/Myli.vue"
//图片预览插件
import VuePreview from 'vue-preview'
// defalut install
Vue.use(VuePreview)
// 通过Vue.component全局定义组件,自定义1 组件拿过来 2component() 
// 别的插件 1 拿过来 2 use
Vue.component(Myul.name,Myul)
// 通过 其name属性定义其组件名
Vue.component(Myli.name,Myli)
Vue.use(Mint)
Vue.prototype.$http = Axios
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
