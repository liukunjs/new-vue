import Vue from 'vue'
import router from './router.js'
import App from './components/App.vue'
import store from './store'
import axios from "axios"
import Mint from "mint-ui"
import "mint-ui/lib/style.css"
import Myul from "./components/comment/Myul.vue"
import Myli from "./components/comment/Myli.vue"
// 通过Vue.component全局定义组件
Vue.component(Myul.name,Myul)
// 通过 其name属性定义其组件名
Vue.component(Myli.name,Myli)
Vue.use(Mint)
Vue.prototype.$http = axios
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
