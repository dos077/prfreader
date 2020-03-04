<template>
  <v-overlay :value="imgIndex !== null" opacity="1" z-index="9">
    <v-card
      v-if="imgIndex !== null"
      tile
      width="100vw"
      height="100vh"
      color="rgba(0,0,0,0)"
    >
      <v-carousel
        v-model="carouselIndex"
        hide-delimiters
        :show-arrows="false"
        width="100%"
        height="100%"
      >
        <v-carousel-item v-for="image in images" :key="image.fileId">
          <v-img
            :src="image.src"
            contain
            width="100%"
            height="100%"
            @click="showTools = !showTools"
          />
        </v-carousel-item>
      </v-carousel>
      <v-toolbar
        absolute
        width="100%"
        :color="showTools ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0)'"
        flat
      >
        <v-container :fluid="!showTools">
          <v-row>
            <v-col>
              <v-btn icon @click="$emit('close')">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-col>
            <v-col v-if="showTools" class="text-right" transition="expand">
              <v-btn icon @click="prevImg">
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn icon @click="nextImg">
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-toolbar>
      <v-toolbar
        v-if="showTools"
        absolute
        bottom
        width="100%"
        flat
        color="rgba(0,0,0,0.8)"
      >
        <v-container>
          <v-row>
            <v-col>
              <p>
                <span class="title">
                  {{ images[carouselIndex].title }}
                </span>
                <span class="caption">
                  {{ images[carouselIndex].caption }}
                </span>
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-toolbar>
    </v-card>
  </v-overlay>
</template>

<script>
export default {
  name: 'ImagePopUp',
  props: {
    images: Array,
    imgIndex: Number
  },
  data() {
    return {
      showTools: false,
      carouselIndex: this.imgIndex
    }
  },
  watch: {
    imgIndex: {
      handler(newIndex) {
        this.carouselIndex = newIndex
      },
      immediate: true
    }
  },
  methods: {
    nextImg() {
      if (this.carouselIndex < this.images.length - 1) this.carouselIndex += 1
      else this.carouselIndex = 0
    },
    prevImg() {
      if (this.carouselIndex > 0) this.carouselIndex -= 1
      else this.carouselIndex = this.images.length - 1
    }
  }
}
</script>

<style lang="scss" scoped></style>
