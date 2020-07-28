<template>
  <v-row>
    <v-col v-for="image in section.images" :key="image.src" :cols="imageOnly ? '6' : '12'" >
      <v-card tile>
        <v-img ref="img"
          :src="image.src"
          :aspect-ratio="imageOnly ? '1' : '1.8'"
          eager
        />
      </v-card>
    </v-col>
    <v-col v-if="textOnly" cols="12">
      <p> {{ section.text }} </p>
    </v-col>
    <v-col v-else-if="section.text && !imageOnly" cols="12">
      <div ref="caption" class="sticky-caption">
        <p>
          <span class="blocks text-caption">
            {{ section.text }}
            <span class="highlighter" :class="`${color} ligthen-1`" />
          </span>
        </p>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ProjectSection',
  props: {
    section: Object
  },
  data: () => ({ }),
  computed: {
    ...mapState('profolio', { color: 'color' }),
    textOnly() {
      return !this.section.images || this.section.images.length === 0
    },
    imageOnly() {
      return this.section.images && this.section.images.length > 1
    }
  }
}
</script>

<style lang="scss" scoped>
.caption-text {
  position: relative;
  display: inline-block;
  padding: 4px 8px;
  font-size: 0.8rem;
  font-weight: bold;
  color: #424242;
  &:after {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    left: 0;
    bottom: 5px;
    width: 100%;
    height: 8px;
    background: #ffffff;
  }
}
</style>