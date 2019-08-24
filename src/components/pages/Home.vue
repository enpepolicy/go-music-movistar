<template lang="html">
  <v-row >
    <v-col
    v-if="!suscription"
    cols="12">
      <v-card
      dark
      color="warning">
        <v-card-text>Suscríbete a GoMusic por 7€/mes IVA incluido. Disfruta de forma ilimitada de todos nuestros contenidos.</v-card-text>
      </v-card>
    </v-col>
    <v-col
    v-if="suscription"
    cols="12">
      <v-card
      dark
      color="success">
        <v-card-text>Estás suscrito a GoMusic. Disfruta live streamings sin límites.</v-card-text>
      </v-card>
    </v-col>

    <v-col
      v-if="suscription"
      cols="12">
      <v-card
      dark>
        <v-img
        :src="require('../../assets/realidadvirtual.jpg')"
        alt="Logo Go Music"
        height="8.5em"/>
        <v-card-text>"Usuario suscrito" (por definir, preferiblemente enviar a portal de GoMusic con cookie tal vez)</v-card-text>
        <v-card-actions class="justify-center">
          <v-btn dark color="success" href="#">Ver Contenido</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col
    v-if="!suscription"
    cols="12">
      <v-card
      dark>
        <v-img
        :src="require('../../assets/realidadvirtual.jpg')"
        alt="Logo Go Music"
        height="8.5em"/>
        <v-card-text>"Usuario NO suscrito" (texto por definir, preferiblemente enviar a 3.3.4)</v-card-text>
        <v-card-actions class="justify-center">
          <v-btn dark color="warning" to="./suscripcion-envio">Suscribete</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

  </v-row>
</template>

<script>
export default {
  data: function () {
    return {
      suscription: true
    }
  }
}
</script>

<style lang="css" scoped>
</style>
