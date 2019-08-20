<template lang="html">
  <v-app-bar
  color='transparent'
  dark
  flat
  >
    <v-spacer></v-spacer>
    <v-layout column justify-center>
      <router-link to="/">
        <v-img
          :src="require('../assets/gmlogo.svg')"
          alt="Logo Go Music"
          contain
          height="9vh"
        />
      </router-link>
    </v-layout>

    <v-spacer></v-spacer>
  </v-app-bar>
</template>
<script>
export default {
}
</script>

<style lang="css" scoped>
.v-toolbar__content{
}
</style>
