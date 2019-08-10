<template lang="html">
    <v-footer
      :padless="padless"
      color="transparent"

    >
      <v-layout column justify-center mx-3>
        <p id="gomusic">Go Music</p>

        <v-layout justify-space-around row mx-auto >
          <a href="#">Condiciones del servicio</a>
          <p>|</p>
          <a href="#">Aviso legal</a>
          <p>|</p>
          <a href="#">Política de cookies</a>
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
