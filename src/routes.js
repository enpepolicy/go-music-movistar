import Vue from 'vue'
import Router from 'vue-router'

/*Componentes*/
import Home from './components/pages/Home'
import Registro from './components/pages/Registro'
import SuscripcionEnvio from './components/pages/Suscripcion-Envio'
import SuscripcionConfirmacion from './components/pages/Suscripcion-Confirmacion'
import UserLogged from './components/pages/User-Logged'
import ERR404 from './components/pages/ERR404'

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
      path: '/Suscripcion-Envio',
      name: 'Suscripcion-Envio',
      component: SuscripcionEnvio
    },
    {
      path: '/Suscripcion-Confirmacion',
      name: 'Suscripcion-Confirmacion',
      component: SuscripcionConfirmacion
    },
    {
      path: '/User-Logged',
      name: 'User-Logged',
      component: UserLogged
    },
    {
      path: '*',
      name: 'ERR404',
      component: ERR404
    }
  ],
  /*Hace que las rutas aparezcan sin #*/
  mode: 'history'
})
