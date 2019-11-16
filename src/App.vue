<template>
  <v-app>
    <Header/>
    <HeaderServicio/>
    <Nav/>

    <v-container fill-height class="align-start">
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-container>

    <v-dialog

    width="90vw"
      v-model="dialog"
    >

      <v-card dark>
        <v-card-title
          class="headlinelighten-2"
          primary-title
        >
        <v-row justify="space-between">
        <span class="pl-4">Aviso de cookies</span>

          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
          <v-spacer/>
            <v-icon>mdi-close</v-icon>

          </v-btn>
        </v-row>
        </v-card-title>

        <v-card-text class="mt-3">
          “Utilizamos cookies propias y de terceros para mejorar el servicio y mostrarte publicidad personalizada basada en tu navegación. Si continuas navegando, aceptarás su uso. Más info o cambio de configuración <a  :href="`${publicPath}cookies.pdf`" target="_blank">aqui</a>”
        </v-card-text>

      </v-card>
    </v-dialog>

    <FooterServicio v-if="pagina != '/suscripcion-envio' "/>
    <Footer/>
  </v-app>
</template>

<script>
import Header from './components/Header'
import HeaderServicio from './components/Header-Servicio'
import Footer from './components/Footer'
import FooterServicio from './components/Footer-Servicio'
import Nav from './components/Nav'

import axios from 'axios'

export default {
  name: 'App',
  components: {
    Header,
    Nav,
    Footer,
    HeaderServicio,
    FooterServicio
  },
  data: function() {
		return {
			pagina: "",
      dialog: true,
      publicPath: process.env.BASE_URL
		};
  },
  methods: {
    // exitPopUp(event){
    //   console.log(onmobile.onBilling(event))
    // }
  },
  beforeUpdate: function(){
    this.pagina = window.location.pathname

    return onmobile.onBilling(event) //
  },
  updated: ()=>{
    console.log({
      "updated hook cookie _om2uid":`${$cookies.get('_om2uid')}`,
      "updated hook cookie _om2rw":`${$cookies.get('_om2rw')}`,
      "updated hook cookie _om2ra":`${$cookies.get('_om2ra')}`
    })

    console.log('updated onmoblie.onBilling(event) function:', onmobile.onBilling(event))

    axios.get(`https://emocionwifi.movistar.es/https/user/?apiKey=269&cred.token=${$cookies.get('_om2ra')}&Type=json`)
    .then(response =>{
      console.log("Updated hook decripted user (or not) from _om2ra:",response.data)
    })
    .catch(function(error){
      console.log("Updated hook decrypt error:", error)
    })

    axios.get('https://emocionwifi.movistar.es/https/user?apiKey=269&cred.token=1hZGAKw4O6g5shH6X1jpdQ&Type=json')
    .then(response =>{
      console.log("Llamada a desencriptar para Esteban:",response.data)
    })
    .catch(function(error){
      console.log("Updated hook decrypt error:", error)
    })

  },
  created: ()=>{
    console.log('created onmoblie.onBilling(event) function:', onmobile.onBilling(event))
    console.log({
      "created hook cookie _om2uid":`${$cookies.get('_om2uid')}`,
      "created hook cookie _om2rw":`${$cookies.get('_om2rw')}`,
      "created hook cookie _om2ra":`${$cookies.get('_om2ra')}`,
    })
  }
};
</script>


<style lang="css">
h1{
  text-align: center;
  color: white;
}
#app{
  background-color: grey;
  background-image: url(https://www.gomusic.la/img/bg_blue.jpg);
  background-position: center center;

}
.v-dialog {
  position: absolute;
top: 0;
left:0
}
</style>
