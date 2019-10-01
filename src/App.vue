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
  beforeUpdate:
    function(){
      this.pagina = window.location.pathname
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
