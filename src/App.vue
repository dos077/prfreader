<template>
  <v-app>
    <v-navigation-drawer v-if="alias" v-model="drawerOn" app dark color="blue-grey darken-4" mobile-breakpoint="1400">
      <v-list nav>
        <v-list-item two-line>
          <v-list-item-avatar v-if="alias.photoURL">
              <img :src="alias.photoURL" />
          </v-list-item-avatar>
          <v-list-item-title>
            {{ alias.displayName }}
          </v-list-item-title>
        </v-list-item>
        <v-divider />
        <v-list-item link :to="`/a/${alias.id}/profile`">
          <v-list-item-icon><v-icon>mdi-information</v-icon></v-list-item-icon>
          <v-list-item-title>About Me</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="`/a/${alias.id}/galleries`">
          <v-list-item-icon><v-icon>mdi-image-multiple</v-icon></v-list-item-icon>
          <v-list-item-title>{{ galleriesCollectionName }}</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="`/a/${alias.id}/profolio`">
          <v-list-item-icon><v-icon>mdi-post</v-icon></v-list-item-icon>
          <v-list-item-title>{{ profolioCollectionName }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main style="position: relative">
      <title-bar v-if="alias" @toggleDrawer="drawerOn = !drawerOn"></title-bar>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import TitleBar from '@/views/components/TitleBar.vue'

export default {
  name: 'App',
  components: {
    TitleBar
  },
  data: () => ({
    drawerOn: null
  }),
  computed: {
    isDesktop() {
      return this.$vuetify.breakpoint.mdAndUp
    },
    ...mapState('alias', { alias: 'current' }),
    ...mapState('galleries', { galleriesCollectionName: 'collectionName' }),
    ...mapState('profolio', { profolioCollectionName: 'collectionName' })
  },
  watch: {
    alias: {
      handler(to) {
        if (to) {
          this.getProfolioMeta()
          this.getGalleriesMeta()
        }
      },
      immediate: true
    }
  },
  methods: {
    ...mapActions('alias', { readAlias: 'read' }),
    ...mapActions('galleries', { getGalleriesMeta: 'readMeta' }),
    ...mapActions('profolio', { getProfolioMeta: 'readMeta' })
  }
}
</script>

<style lang="scss">
.spacer-grid {
  display: grid;
  min-height: 100vh;
  &.mobile {
    grid-template-columns: 1fr;
    grid-template-rows: 64px auto;
  }
  &.desktop {
    grid-template-columns: 72px auto;
  }
}
</style>
