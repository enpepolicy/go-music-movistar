<template lang="html">
    <v-footer
      :padless="padless"
      color="#00A9E0"

    >
      <v-layout column justify-center my-5 mx-3>

        <v-img
          :src="require('../assets/texto_pie_new.png')"
          alt="Logo Movistar"
          contain
          height="25"
          id="movistar"
        />

        <v-layout justify-space-around row mx-auto >
          <a href="http://wap.movistar.com/que-es-emocion">¿Qué es Emoción?</a>
          <p>|</p>
          <a href="http://emocion.fonestarz.com/micuentamovil">Mis suscripciones</a>
          <p>|</p>
          <a href="http://wap.movistar.com/ayuda-emocion">Ayuda</a>
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
  font-size: 0.8em;
  cursor: pointer;
}
#movistar{
  margin-top: 0.5em;
  margin-bottom: 1em
}
</style>
