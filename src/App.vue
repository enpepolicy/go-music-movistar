<template>
  <v-app>
    <Header/>
    <HeaderServicio/>
    <Nav/>

    <v-container fill-height class="align-start">
      <v-fade-transition mode="out-in">
        <router-view/>
      </v-fade-transition>
    </v-container>

    <!-- Meter boton aceptar -->
    <v-dialog
    persistent
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
          :disabled="popUpBtnLoading"
          color="primary"
          text
          @click="exitPopUp"
          >
          <v-spacer/>
            <v-icon >mdi-close</v-icon>
          </v-btn>
        </v-row>
        </v-card-title>

        <v-card-text class="mt-3">
          “Utilizamos cookies propias y de terceros para mejorar el servicio y mostrarte publicidad personalizada basada en tu navegación. Si continuas navegando, aceptarás su uso. Más info o cambio de configuración <a  :href="`${publicPath}cookies.pdf`" target="_blank">aqui</a>”
        </v-card-text>
        <v-card-actions>
          <v-btn
          :loading="popUpBtnLoading"
          color="primary"
          @click="exitPopUp">
            Aceptar
          </v-btn>
        </v-card-actions>

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

import { mapMutations } from 'vuex'
// import axios from 'axios'

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
      payload: {
        isAutenticated: false,
        isSubscribed: false,
        error: false
      },
      infos: [],
      pagina: "",
      dialog: true,
      publicPath: process.env.BASE_URL,
      popUpBtnLoading: false
    }
  },
  methods: {
    ...mapMutations([
      'ACTUALIZA_USUARIO'
    ]),
    getUser(){
      // Testing sin peticion de estado
      this.payload.isAutenticated = true;
      this.payload.isSubscribed = false;
      this.payload.error = false;
      // console.log(this.payload);
      this.ACTUALIZA_USUARIO(this.payload)

      this.dialog = false

      this.checkError()

      // axios.get('https://emocion.gomusic.eu/api/v1/storeCookie')
      // .then(function (response) {
      //   // handle success
      //   this.payload.isAutenticated = response.data.isAutenticated;
      //   this.payload.isSubscribed = response.data.isSubscribed;
      //   this.payload.error = response.data.error;
      //   // console.log(response);
      //   this.ACTUALIZA_USUARIO(this.payload)

      //   this.checkError()
      //   this.dialog = false
      //   this.popUpBtnLoading = false // por si acaso
      // })
      // .catch(function (error) {
      //   // handle error
      //   // console.log(error);
      // })
      // .finally(function () {
      //   // always executed
      // });
    },
    checkError(){
      // console.log(this.payload.error)
      if (this.payload.error) {
        this.$router.push('Apaga-Wifi')
      }
    },
    exitPopUp(){
      this.popUpBtnLoading = true
      this.getUser();
    }
  },
  beforeUpdate: function(){
    this.pagina = window.location.pathname
  },
  updated: function(){
    this.getUser();
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
}
</style>
