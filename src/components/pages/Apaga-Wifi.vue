<template>
  <v-row justify="center">
    <v-col cols="10" class="text-center">
      <h1 >
          Apaga el wifi y vuelve a intentar.<br>
          <v-icon dark size="100">mdi-wifi-off</v-icon>
      </h1>
      <v-btn class="my-5" color="primary" href="https://emocion.gomusic.eu">        
        Reintentar
      </v-btn>
      <p class="second-paragraph">
        Si el problema persiste, revisa tu conexión a internet.
      </p>

    </v-col>

  </v-row>

</template>

<script>
import { mapState } from 'vuex'

export default {
  data: function(){
    return {
    }
  },
  computed: {
    ...mapState([
      'isAutenticated',
      'isSubscribed',
      'error'
    ])
  }
}
</script>

<style lang="scss" scoped>
.second-paragraph{
  font-size: 16px !important;
  color: #fafafa
}
</style>
