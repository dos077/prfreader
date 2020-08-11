<template>
<div>
  <v-container :fluid="$vuetify.breakpoint.mdAndDown">
    <v-card
      v-for="gallery in galleries" :key="gallery.id"
      style="width: 100%; max-width: 790px"
      class="mx-auto mb-4"
      :to="buildPath(gallery.id)"
      ripple
      hover
      :color="color"
      tile
    >
      <v-hover v-slot:default="{ hover }">
        <v-img
          aspect-ratio="1.618"
          :src="gallery.images[0].src"
          width="100%"
          max-height="360px"
          :style="{
            opacity: hover ? 1 : .85
          }"
        >
          <div
            class="d-flex justify-end align-end pa-4"
            style="height: 100%; width: 100%;"
          >
            <v-card
              dark
              :color="color + ' darken-4'"
              :max-width="$vuetify.breakpoint.smAndDown ? '70%' : '360px'"
              max-height="100%"
            >
              <v-card-title class="text-h5 text-sm-h4">
                {{ gallery.name }}
              </v-card-title>
              <v-slide-y-transition>
                <v-card-text v-if="hover">
                  <div v-for="(image, index) in gallery.images" :key="index">
                    <span class="subtitle-2" v-if="index < nameLimit"> {{ image.title }} </span>
                  </div>
                </v-card-text>
              </v-slide-y-transition>
            </v-card>
          </div>
        </v-img>
      </v-hover>
    </v-card>
  </v-container>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'GalleryLanding',
  data: () => ({
    nameLimit: 5,
  }),
  computed: {
    ...mapState('galleries', { galleries: 'items', color: 'color' })
  },
  methods: {
    buildPath(gid) {
      return `/a/${this.$route.params.alias}/galleries/${gid}`
    }
  }
}
</script>