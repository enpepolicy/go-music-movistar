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
			pagina: ""
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

</style>
