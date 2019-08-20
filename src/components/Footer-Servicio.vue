<template lang="html">
    <v-footer
      :padless="padless"
      color="transparent"

    >
      <v-layout column justify-center mx-3>
        <p id="gomusic">Go Music</p>

        <v-layout justify-space-around row mx-auto >
          <router-link to="/Condiciones-Servicio">Condiciones del servicio</router-link>
          <p>|</p>
          <router-link to="/Aviso-Legal-Servicio">Aviso legal</router-link>
          <p>|</p>
          <router-link to="/Politica-Cookies">Política de cookies</router-link>
        </v-layout>
      </v-layout>




    </v-footer>
</template>

<script>
export default {
    data: () => ({
      padless: true,
      variant: 'default',
    }),
    computed: {
    },
  }
</script>

<style lang="css" scoped>
.v-application a, p{
  color: white;
  text-decoration: none;
  margin:2px;
  font-size: 0.7em;
  cursor: pointer;
}
#gomusic{
  text-align: center;
  font-size: 1.3em;
  margin-bottom: 0
}
</style>
