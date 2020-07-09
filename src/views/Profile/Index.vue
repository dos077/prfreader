<template>
  <nav-content
    :title="user.displayName"
    ref="container"
    :bg-color="color"
  >
    <template v-slot:nav>
      <v-tabs
        :value="focusIndex"
        :vertical="isDesktop"
        grow
        background-color="rgba(0,0,0,0)"
        :slider-size="isDesktop ? '0' : '2'"
        active-class="current"
        style="justify-content: center;"
      >
        <v-tab
          v-for="(section, index) in sections"
          :key="section.id"
          @click="focusIndex = index"
        >
          {{ section.name }}
        </v-tab>
      </v-tabs>
    </template>
    <template v-slot:content>
      <v-container style="width: 90%; max-width: 50rem">
        <v-row v-for="(section, index) in sections" :key="section.id" ref="sections">
          <v-col cols="12">
            <chips-section v-if="section.chips" :section="section" :focus="index === focusIndex" />
            <lines-section v-if="section.lines" :section="section" :focus="index === focusIndex" />
          </v-col>
          <v-col v-if="index < sections.length - 1" cols="12">
            <v-divider class="my-2" />
          </v-col>
        </v-row>
      </v-container>
    </template>
  </nav-content>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import timeout from '@/helpers/timeout'
import NavContent from '@/views/components/NavContent.vue'
import ChipsSection from './_chips.vue'
import LinesSection from './_lines.vue'

export default {
  name: 'UserProfile',
  components: {
    NavContent,
    ChipsSection,
    LinesSection
  },
  data: () => ({
    focusIndex: 0,
    scrollPoints: [],
    watchScroll: true
  }),
  computed: {
    ...mapState('alias', { user: 'current' }),
    ...mapState('profile', { sections: 'items', color: 'color' }),
    isDesktop() {
      return this.$vuetify.breakpoint.mdAndUp
    }
  },
  watch: {
    alias: {
      async handler() {
        await this.readProfileMeta()
        await this.readProfile()
        this.getScrollPb()
        this.scrollFocus()
        window.addEventListener('resize', this.getScrollPb)
        window.addEventListener('scroll', this.scrollFocus)
      },
      immediate: true
    },
    async focusIndex(to) {
      this.watchScroll = false
      await this.$vuetify.goTo(this.scrollPoints[to])
      await timeout(100)
      this.watchScroll = true
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.getScrollPb)
    window.removeEventListener('scroll', this.scrollFocus)
  },
  methods: {
    ...mapActions('profile', { readProfile: 'getAll', readProfileMeta: 'readMeta' }),
    getScrollPb() {
      this.scrollPoints = []
      const points = this.scrollPoints
      const { scrollY } = window
      this.$refs.sections.forEach((section, index) => {
        points[index] = scrollY + Math.floor(section.getBoundingClientRect().y) - 72
      })
    },
    scrollFocus() {
      if (this.watchScroll) {
        const pbs = this.scrollPoints
        let currentP = 0
        const { scrollY } = window
        pbs.forEach((pb, index) => {
          if (scrollY >= pb && (!pbs[index+1] || pbs[index + 1] > scrollY)) {
            currentP = index
          }
        })
        if (currentP !== this.focusIndex) this.focusIndex = currentP
      }
    }
  }
}
</script>