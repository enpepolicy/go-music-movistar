import Vue from 'vue'
import Router from 'vue-router'

/*Componentes*/
import Home from './components/pages/Home'
import SuscripcionEnvio from './components/pages/Suscripcion-Envio'
import SuscripcionConfirmacion from './components/pages/Suscripcion-Confirmacion'
import CondicionesServicio from './components/pages/Condiciones-Servicio'
import PoliticaCookies from './components/pages/Politica-Cookies'
import AvisoLegalServicio from './components/pages/Aviso-Legal-Servicio'
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
      path: '/Aviso-Legal-Servicio',
      name: 'Aviso-Legal-Servicio',
      component: AvisoLegalServicio
    },
    {
      path: '/Condiciones-Servicio',
      name: 'Condiciones-Servicio',
      component: CondicionesServicio
    },
    {
      path: '/Politica-Cookies',
      name: 'Politica-Cookies',
      component: PoliticaCookies
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
      path: '*',
      name: 'ERR404',
      component: ERR404
    }
  ],
  /*Hace que las rutas aparezcan sin #*/
  mode: 'history'
})
