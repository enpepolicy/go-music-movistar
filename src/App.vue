<template>
  <v-app>
    <v-layout  justify-space-around column fill-height >

      <Header/>

      <v-layout justify-center  >
        <router-view />
      </v-layout  >

      <Footer/>
    </v-layout>
  </v-app>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
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
