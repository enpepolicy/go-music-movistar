import Vue from 'vue'
import Router from 'vue-router'

/*Componentes*/
import Home from './components/Home'
import ERR404 from './components/ERR404'
import Registro from './components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Registro',
      name: 'Registro',
      component: Registro
    },
    {
      path: '*',
      component: ERR404
    }
  ],
  /*Hace que las rutas aparezcan sin #*/
  mode: 'history'
})
