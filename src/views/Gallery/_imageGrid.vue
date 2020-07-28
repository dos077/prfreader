<template>
  <div class="image-grid mt-1 ml-1">
    <image-grid-cell
      v-for="(image, index) in images"
      :key="image.src"
      :image="image"
      @openImage="imgIndex = index"
    />
    <image-pop-up
      :image="currentImg"
      :images="images"
      :img-index="imgIndex"
      @close="imgIndex = null"
    />
  </div>
</template>

<script>
import ImageGridCell from './_imageGridCell.vue'
import ImagePopUp from './_imagePopUp.vue'

export default {
  name: 'ImageGrid',
  components: {
    ImageGridCell,
    ImagePopUp
  },
  props: {
    images: Array
  },
  data() {
    return {
      imgIndex: null
    }
  },
  computed: {
    currentImg() {
      if (this.imgIndex !== null) {
        return this.images[this.imgIndex]
      }
      return null
    }
  }
}
</script>

<style lang="scss" scoped>
.image-grid {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  width: 100%;

  @media screen and (min-width: 769px) {
    left: 4px; 
    padding: 8px;
  }
}
</style>
