<template>
  <h1>
      Apaga el wifi
  </h1>
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

<style>

</style>