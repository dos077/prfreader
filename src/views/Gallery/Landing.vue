<template>
<div>
  <v-card
    v-for="gallery in galleries" :key="gallery.id"
    style="width: 94%; max-width: 1080px"
    class="mx-auto my-4"
   :to="buildPath(gallery.id)" ripple outlined hover
   color="grey lighten-4"
  >
    <v-hover v-slot:default="{ hover }">
      <v-img aspect-ratio="1.618" :src="gallery.images[0].src" width="100%" max-height="540px">
        <div class="d-flex justify-end align-end pa-4" style="height: 100%">
          <v-card
            dark
            width="50%"
            max-width="360px"
            max-height="100%"
            :style="`opacity: ${hover ? '1' : '0.6' }`"
          >
            <v-card-title class="display-1">
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
    ...mapState('galleries', { galleries: 'items' })
  },
  methods: {
    buildPath(gid) {
      return `/${this.$route.params.alias}/galleries/${gid}`
    }
  }
}
</script>