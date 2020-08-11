<template>
  <div v-if="project">
    <v-img
      ref="img"
      v-if="project.bannerImage"
      aspect-ratio="1.5"
      width="100%"
      max-height="50vh"
      :src="project.bannerImage.src"
      style="position: relative"
    />
    <v-container id="read-body" :class="{ desktop: isDesktop }">
      <v-row>
        <v-col>
          <div ref="caption" class="sticky-caption">
            <h2 class="blocks display-3">
              {{ project.name }}
              <span class="highlighter" :class="`${color} ligthen-1`" />
            </h2>
            <div></div>
            <div v-if="project.github || project.demo" class="blocks">
              <v-btn v-if="project.github" text :href="project.github">Github</v-btn>
              <v-divider vertical></v-divider>
              <v-btn v-if="project.demo" text :href="project.demo">Live Demo</v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
      <project-section v-for="section in project.sections" :key="section.id" :section="section" />
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ProjectSection from './_section.vue'

export default {
  name: 'Project',
  components: {
    ProjectSection
  },
  data: () => ({ }),
  computed: {
    ...mapState('profolio', { project: 'current', color: 'color' }),
    isDesktop() {
      return this.$vuetify.breakpoint.mdAndUp
    },
    projectId() {
      return this.$route.params.pid
    }
  },
  watch: {
    projectId: {
      async handler(to) {
        if(to) {
          await this.read(to)
          if(!this.project) this.backtoLanding()
          else this.$vuetify.goTo(0)
        }
      },
      immediate: true
    }
  },
  destroyed() {
  },
  methods: {
    ...mapActions('profolio', { read: 'read' }),
    backtoLanding() {
      const alias = this.$route.params.alias
      if (!alias) this.$router.push('/')
      else this.$router.push(`${alias}/profolio`)
    }
  }
}
</script>

<style lang="scss">
#read-body {
  width: 94%;
  max-width: 66em;
  margin: 0 auto;

  &.desktop {
    width: 75%;
  }

  p {
    margin: 0 12px 1px;
  }
}
.sticky-img {
  z-index: 0;
}
.sticky-caption {
  position: relative;
  z-index: 1;
  padding-bottom: 2rem;
  .blocks {
    position: relative;
    display: inline-block;
    padding: 4px 4px 6px;
    margin-bottom: .6em;
    line-height: 1.25em;
    .highlighter {
      display: block;
      position: absolute;
      z-index: -1;
      left: 0;
      bottom: 8px;
      width: 100%;
      height: .25em;
    }
  }
}
</style>