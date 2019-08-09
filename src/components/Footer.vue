<template lang="html">
    <v-footer
      :padless="padless"
      color="#00A9E0"

    >
      <v-layout column justify-center ma-5>

        <v-img
          :src="require('../assets/texto_pie_new.png')"
          alt="Logo Movistar"
          contain
          height="30"
          id="movistar"
        />

        <v-layout justify-space-around row mx-auto >
          <a href="#">¿Qué es Emoción?</a>
          <p>|</p>
          <a href="#">Mis suscripciones</a>
          <p>|</p>
          <a href="#">Ayuda</a>
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
a, p{
  color: white;
  text-decoration: none;
}
#movistar{
  margin-top: 1em;
  margin-bottom: 2em
}
</style>
