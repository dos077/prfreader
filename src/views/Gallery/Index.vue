<template>
  <nav-content :title="collectionName" :bg-color="color">
    <template v-slot:nav>
      <v-tabs
        v-model="tab"
        :vertical="isDesktop"
        grow
        background-color="rgba(0,0,0,0)"
        slider-size="0"
        active-class="current"
        style="justify-content: center;"
      >
        <v-tab v-for="gallery in galleries" :key="gallery.id" :to="buildPath(gallery.id)">
          {{ gallery.name }}
        </v-tab>
      </v-tabs>
    </template>
    <template v-slot:content>
      <router-view></router-view>
    </template>
  </nav-content>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import NavContent from '@/views/components/NavContent.vue'

export default {
  name: 'Galleries',
  components: {
    NavContent
  },
  data() {
    return {
      tab: null
    }
  },
  computed: {
    ...mapState('galleries', { galleries: 'items', collectionName: 'collectionName', color: 'color' }),
    isDesktop() {
      return this.$vuetify.breakpoint.mdAndUp
    }
  },
  mounted() {
    this.loadGalleries()
  },
  methods: {
    ...mapActions('galleries', { loadGalleries: 'getAll' }),
    buildPath(gid) {
      return `/a/${this.$route.params.alias}/galleries/${gid}`
    }
  }
}
</script>

<style lang="scss" scoped></style>