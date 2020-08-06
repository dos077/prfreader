<template>
  <v-img
    :class="{
      'elevation-8': hover,
      'mr-1 mb-1': $vuetify.breakpoint.smAndDown,
      'mr-4 mb-4': $vuetify.breakpoint.mdAndUp,
    }"
    :aspect-ratio="containerAspect"
    :max-width="maxWidth"
    :min-width="minWidth"
    :src="image.src"
    @click="$emit('openImage')"
    @load="getImgDimension"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    ref="img"
    :style="`flex-grow: ${growFactor};`"
  >
    <v-slide-y-reverse-transition>
      <div v-if="image.title && hover" class="caption">
        <span class="display-1">{{ image.title }}</span>
      </div>
    </v-slide-y-reverse-transition>
  </v-img>
</template>

<script>
const minAspect = 3 / 4
const maxAspect = 3 / 2
const minRowWidth = 360

export default {
  name: 'ImageGridCell',
  props: {
    image: Object
  },
  data() {
    return {
      widthBasis: minRowWidth / maxAspect,
      imgHeight: 100,
      imgWidth: 100,
      hover: false,
    }
  },
  computed: {
    imageAspect() {
      return this.imgWidth / this.imgHeight
    },
    containerAspect() {
      if (this.imageAspect > maxAspect) return maxAspect
      if (this.imageAspect < minAspect) return minAspect
      return this.imageAspect
    },
    growFactor() {
      return this.imageAspect / maxAspect * 100
    },
    minWidth() {
      if (this.$vuetify.breakpoint.mdAndUp) return '280px'
      return '174px'
    },
    maxWidth() {
      if (this.$vuetify.breakpoint.mdAndUp) return '594px'
      return '384px'
    }
  },
  methods: {
    getImgDimension() {
      const height = this.$refs.img.image.naturalHeight
      const width = this.$refs.img.image.naturalWidth
      this.imgHeight = height
      this.imgWidth = width
    }
  }
}
</script>

<style lang="scss" scoped>
  .caption {
    position: absolute;
    display: flex;
    align-items: flex-end;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fafafa;
  }
</style>
