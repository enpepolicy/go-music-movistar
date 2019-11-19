<template lang="html">
  <v-row >
    <v-col
    cols="12">
      <v-card
      dark
      color="success"
      class="mb-3">
        <v-card-text><v-icon>check_circle</v-icon><strong> Te has suscrito a GoMusic por 7€/mes IVA incluido</strong></v-card-text>
      </v-card>
      <v-card
      dark>
        <v-img
        :src="require('../../assets/realidadvirtual.jpg')"
        alt="Logo Go Music"
        height="8.5em"/>
        <v-card-actions class="justify-center">
          <v-btn dark color="success" href="#">Ver Contenido</v-btn>
        </v-card-actions>
        <v-card-text>
          <ul>
            <li>El coste del servicio  se cargará semanalmente en tu tarjeta prepago o factura Movistar.</li>
            <li>Puedes cancelar la suscripción en cualquier momento accediendo a <a href="http://emocion.movistar.es/micuenta">Gestionar Suscripciones</a> o llamando gratis al 1004.</li>
            <li>Para volver a GoMusic las siguientes veces entra desde <a href="http://wap.movistar.com/Musica">Emocion Música</a> o desde el SMS que has recibido.</li>
          </ul>
        </v-card-text>
      </v-card>
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

<style lang="css" scoped>
</style>
