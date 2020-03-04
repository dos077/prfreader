<template>
  <v-hover v-slot:default="{ hover }" open-delay="200" close-delay="200">
    <v-img
      class="mr-1 mb-1"
      :class="{ 'elevation-8': hover }"
      :aspect-ratio="containerAspect"
      max-width="540px"
      width="33%"
      min-width="180px"
      max-height="600px"
      :src="image.src"
      @click="$emit('openImage')"
      @load="getImgDimension"
      ref="img"
    >
      <v-fade-transition v-if="hover">
        <div v-if="image.title" class="caption">
          <span class="display-1">{{ image.title }}</span>
        </div>
      </v-fade-transition>
    </v-img>
  </v-hover>
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
      imgWidth: 100
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
