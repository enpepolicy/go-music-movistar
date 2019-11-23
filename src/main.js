
import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import vuetify from './plugins/vuetify';
import VueCookies from 'vue-cookies'
import store from './store'



Vue.use(VueCookies)
Vue.use(Vuetify, {
iconfont: 'md' // 'md' || 'mdi' || 'fa' || 'fa4'
})
Vue.config.productionTip = false



// router.beforeEach((to, from, next) => {
//   if (store.state.error) next('/Apaga-Wifi')
//   else next()
//   // next(console.log(store.state.error))
//   console.log(store.state.error)
//   // router.push('Apaga-Wifi')
// })

// Comprobacion de error para mandar a Apagar Wifi
// router.afterEach((to, from, next) => {
//   if (store.state.error) next('/Apaga-Wifi')
//   else next()
//   // next(console.log(store.state.error))
//   // console.log(store.state.error)
//   // router.push('Apaga-Wifi')
// })

new Vue({
  render: h => h(App),
  vuetify,
  store,
  router
}).$mount('#app')
