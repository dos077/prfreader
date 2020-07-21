<template>
  <div>
    <v-card
      v-for="project in projects" :key="project.id"
      style="width: 94%; max-width: 1080px"
      class="mx-auto my-4"
      :to="buildPath(project.id)" ripple outlined hover
      color="grey lighten-4"
    >
      <v-hover v-slot:default="{ hover }">
        <v-img aspect-ratio="1.618" :src="project.bannerImage.src" width="100%" max-height="540px">
          <div class="d-flex justify-end align-end pa-4" style="height: 100%">
            <v-card
              dark
              width="50%"
              max-width="360px"
              max-height="100%"
              :style="`opacity: ${hover ? '1' : '0.6' }`"
            >
              <v-card-title class="display-1">
              {{ project.name }}
              </v-card-title>
            </v-card>
          </div>
        </v-img>
      </v-hover>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ProfolioLanding',
  computed: {
    ...mapState('profolio', { projects: 'items' })
  },
  methods: {
    buildPath(pid) {
      return `/a/${this.$route.params.alias}/profolio/${pid}`
    }
  }
}
</script>