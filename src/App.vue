<template>
  <v-app>

    <Header/>
    <Nav/>

    <v-layout justify-center column fill-height ma-5>
      <router-view />
    </v-layout  >

    <Footer/>
  </v-app>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav'

export default {
  name: 'App',
  components: {
    Header,
    Nav,
    Footer
  },
  data: () => ({
    //
  }),
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
