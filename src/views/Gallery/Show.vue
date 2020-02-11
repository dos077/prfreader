<template>
  <image-grid :images="gallery ? gallery.images : []" />
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ImageGrid from './_imageGrid.vue'

export default {
  name: 'Gallery',
  components: {
    ImageGrid
  },
  computed: {
    ...mapState('galleries', { gallery: 'current' }),
    galleryId() {
      return this.$route.params.gid
    }
  },
  watch: {
    galleryId: {
      async handler(to) {
        if(to) {
          await this.readGallery(to)
          if(!this.gallery) this.backtoLanding()
        }
      },
      immediate: true
    }
  },
  methods: {
    ...mapActions('galleries', { readGallery: 'read' }),
    backtoLanding() {
      const alias = this.$route.params.alias
      if (!alias) this.$router.push('/')
      this.$router.push(`${alias}/galleries`)
    }
  }
}
</script>
