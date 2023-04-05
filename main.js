import App from './App'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// #ifndef VUE3
import Vue from 'vue'
// Vue.use(ElementUI)
import {request} from './util/api.js'
import store from './store/store.js'
import router from './router/router.js'
const id = uni.getStorageSync('uId')
if(id){
  var socketTask = uni.connectSocket({
    url:`ws://8.134.133.19:8084/ws?userId=${id}`,
  })
}
console.log(socketTask);
Vue.prototype.request = request
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,store,router
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif