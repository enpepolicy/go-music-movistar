<template lang="html">
  <v-layout column >
    <h1 >Movistar Go Music</h1>
      <v-tabs show-arrows dark grow slider-color="white">
        <v-tab to="/" >
          Home
        </v-tab>
        <v-tab to="/registro">
          Registro
        </v-tab>
        <v-tab to="/suscripcion">
          Suscripción
        </v-tab>
        <v-tab to="/login">
          Login
        </v-tab>
        <v-tab to = "#">
          Vista 4
        </v-tab>
      </v-tabs>
  </v-layout>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
h1{
  background-color: #d9527d;
  text-align: center;
  color: white;
}
</style>
