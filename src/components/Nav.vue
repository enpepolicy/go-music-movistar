<template lang="html">
      <v-tabs show-arrows dark grow slider-color="white" background-color="transparent">
        <v-tab to="/" >
          Home (case 1)
        </v-tab>
        <v-tab to = "/user-logged">
          Loggued User (case 2)
        </v-tab>
        <v-tab to="/suscripcion-envio">
          Envio de Suscripción
        </v-tab>
        <v-tab to="/suscripcion-confirmacion">
          Confirmacion de Suscripción
        </v-tab>
        <v-tab to = "/Aviso-Legal-Servicio">
          Aviso Legal de Servicio
        </v-tab>
        <v-tab to = "/Condiciones-Servicio">
          Condiciones de Servicio
        </v-tab>
        <v-tab to = "/Politica-Cookies">
          Politica de Cookies
        </v-tab>
      </v-tabs>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
