<template lang="html">
  <v-row >

    <v-col
      v-if="isSubscribed"
      cols="12">
      <v-card
      dark>
        <v-img
        :src="require('../../assets/realidadvirtual.jpg')"
        alt="Logo Go Music"
        height="8.5em"/>
        <v-card-title class="justify-center">Enhorabuena, ya estas suscrito.</v-card-title>
        <v-card-actions class="justify-center">
          <v-btn dark color="success" href="#">Ver Contenido</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col
    v-if="!isSubscribed"
    cols="12">
      <v-card
      dark>
        <v-img
        :src="require('../../assets/realidadvirtual.jpg')"
        alt="Logo Go Music"
        height="8.5em"/>
        <v-card-text class="text-center"><strong>Suscríbete a GoMusic por 7€/mes</strong> IVA incluido. Disfruta de forma ilimitada de todos nuestros contenidos.</v-card-text>

        <v-form v-model="valid" class="pa-0 ma-0">
          <v-row justify="center">
            <v-col cols="8">
              <v-text-field
              ref="form"
              v-model="email"
              :rules="emailRules"
              hide-details
              required
              outlined
              label="Tu mail"
              placeholder="ejemplo@ejemplo.com"/>
            </v-col>
          </v-row>

          <v-card-actions class="justify-center">
            <v-btn large dark color="grey" to="">Cancelar</v-btn>
            <v-btn large dark color="error" to="" :disabled="!valid">Activar</v-btn>
          </v-card-actions>
        </v-form>

        <v-card-text class="text-center">Pulsando en “Activar” aceptas las <router-link to="/Condiciones-Servicio">Condiciones del Servicio</router-link>. El importe será cargado en tu tarjeta prepago o factura Movistar. Podrás cancelar la suscripción en cualquier momento desde el servicio o llamando al 1004.</v-card-text>
      </v-card>
    </v-col>

  </v-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: function(){
    return {
      email:"",
      valid: true,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ]
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
