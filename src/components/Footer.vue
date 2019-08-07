<template lang="html">
    <v-footer
      :padless="padless"
    >
      <v-card
        flat
        tile
        width="100%"
        class="orange lighten-2 text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Go Music</strong>
        </v-card-text>
      </v-card>
    </v-footer>
</template>

<script>
export default {
    data: () => ({
      icons: [
        'home',
        'event',
        'delete',
      ],
      padless: true,
      variant: 'default',
    }),
    computed: {
    },
  }
</script>

<style lang="css" scoped>
</style>
