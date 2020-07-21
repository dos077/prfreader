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
          v-for="(section, index) in sortedSections"
          :key="section.id"
          @click.prevent="tabFocus(index)"
        >
          {{ section.name }}
        </v-tab>
      </v-tabs>
    </template>
    <template v-slot:content>
      <v-container ref="wrapper" style="width: 90%; max-width: 50rem">
        <v-row v-for="(section, index) in sortedSections" :key="section.id" ref="sections">
          <v-col cols="12">
            <chips-section v-if="section.chips" :section="section" :focus="index === focusIndex" />
            <lines-section v-if="section.lines" :section="section" :focus="index === focusIndex" />
          </v-col>
          <v-col v-if="index < sections.length - 1" cols="12">
            <v-divider class="my-2" />
          </v-col>
        </v-row>
      </v-container>
      <v-container v-if="isLoopOn" ref="clones" style="width: 90%; max-width: 50rem">
        <v-row v-for="(section, index) in cloneSections" :key="index">
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
import wait from '@/helpers/timeout'
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
    watchScroll: true,
    isLoopOn: false,
    cloneSections: []
  }),
  computed: {
    ...mapState('alias', { user: 'current' }),
    ...mapState('profile', { sections: 'items', color: 'color' }),
    isDesktop() {
      return this.$vuetify.breakpoint.mdAndUp
    },
    sortedSections() {
      if (!this.sections) return []
      return [...this.sections].sort((a, b) => {
        const aPrio = a.priority ? a.priority : 0
        const bPrio = b.priority ? b.priority : 0
        return bPrio - aPrio
      })
    }
  },
  watch: {
    alias: {
      async handler() {
        await this.readProfileMeta()
        await this.readProfile()
      },
      immediate: true
    },
    sortedSections: {
      handler(to) {
        if (to && to.length) {
          window.removeEventListener('resize', this.checkViewSize)
          window.removeEventListener('scroll', this.checkScroll)
          this.checkViewSize()
          window.addEventListener('resize', this.checkViewSize)
          window.addEventListener('scroll', this.checkScroll)
        }
      },
      immediate: true
    }
  },
  mounted() {
    window.scrollTo(0, 1)
  },
  destroyed() {
    window.removeEventListener('resize', this.checkViewSize)
    window.removeEventListener('scroll', this.checkScroll)
  },
  methods: {
    ...mapActions('profile', { readProfile: 'getAll', readProfileMeta: 'readMeta' }),
    getScrollPb() {
      this.scrollPoints = []
      const points = this.scrollPoints
      const { scrollY } = window
      const topOffset = this.isDesktop ? 0 : 64
      this.$refs.sections.forEach((section, index) => {
        points[index] = scrollY + Math.floor(section.getBoundingClientRect().y) - topOffset
      })
    },
    checkScroll() {
      const yPreem = 96
      if (this.watchScroll) {
        const { scrollY } = window
        if (this.$refs.wrapper.getBoundingClientRect().bottom < yPreem) {
          this.focusIndex = 0
        } else {
          this.scrollPoints.forEach((pt, i) => {
            if (i === this.focusIndex) return
            const topOrReached = i === 0 || scrollY > pt - yPreem
            const bottomOrIn = i === this.scrollPoints.length - 1 ||
              scrollY < this.scrollPoints[i + 1] - yPreem
            if (topOrReached && bottomOrIn) {
              this.watchScroll = false
              this.focusIndex = i
              this.watchScroll = true
            }
          })
        }
        if (this.isLoopOn) {
          const topLimit = this.isDesktop ? 0 : 64
          const cloneTop = this.$refs.clones.getBoundingClientRect().y
          if (cloneTop < topLimit) {
            const yTarget = this.isDesktop ? 1 : 288
            return window.scrollTo(0, yTarget)
          }
          const wrapperBottom = this.$refs.wrapper.getBoundingClientRect().bottom
          if (this.isDesktop && scrollY === 0) return window.scrollTo(0, wrapperBottom)
        }
      }
    },
    async checkViewSize() {
      await wait(200)
      const winHeight = window.innerHeight
      const docHeight = this.$refs.wrapper.offsetHeight
      this.getScrollPb()
      if (docHeight > winHeight) {
        this.isLoopOn = true
        let cloneHeight = this.scrollPoints[0]
        let index = 0
        while(cloneHeight < winHeight) {
          this.cloneSections.push(this.sortedSections[index])
          cloneHeight += this.$refs.sections[index].offsetHeight
          index += 1
        }
      } else {
        this.isLoopOn = false
      }
    },
    async tabFocus(index) {
      if (this.watchScroll && index !== this.focusIndex) {
        this.focusIndex = index
        this.watchScroll = false
        await this.$vuetify.goTo(this.scrollPoints[index])
        await wait(100)
        this.watchScroll = true
      }
    },
  }
}
</script>