<template>
  <v-row>
    <v-col v-for="image in section.images" :key="image.src" :cols="imageOnly ? '6' : '12'" >
      <v-img ref="img" :src="image.src" :aspect-ratio="imageOnly ? '0.8' : '1.8'" eager @load="mountStickyController"/>
    </v-col>
    <v-col v-if="section.text && !imageOnly" cols="12">
      <div ref="caption" class="sticky-caption">
        <p v-if="!section.images"> {{ section.text }} </p>
        <p v-else><span>{{ section.text }}</span></p>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import stickyCaptionsController from '@/helpers/stickyCaptions'

export default {
  name: 'ProjectSection',
  props: {
    section: Object
  },
  data: () => ({
    stickyController: null
  }),
  computed: {
    imageOnly() {
      return this.section.images && this.section.images.length > 1
    }
  },
  destroyed() {
    if (this.stickyCaptionsController) this.stickyController.stop()
  },
  methods: {
    mountStickyController() {
      if (this.section.images && this.section.images.length < 2 && this.section.text && !this.stickyController) {
        const { img, caption } = this.$refs
        this.stickyController = stickyCaptionsController()
        this.stickyController.set({ img: img[0].$el, caption })
        this.stickyController.start()
      }
    }
  }
}
</script>
