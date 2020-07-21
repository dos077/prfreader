<template>
  <nav-content :title="collectionName" :bg-color="color">
    <template v-slot:nav>
      <v-tabs
        v-model="tab"
        :vertical="isDesktop"
        center-active
        background-color="rgba(0,0,0,0)"
        slider-size="0"
        active-class="current"
        style="justify-content: center;"
      >
        <v-tab v-for="project in profolio" :key="project.id" :to="buildPath(project.id)">
          {{ project.name }}
        </v-tab>
      </v-tabs>
    </template>
    <template v-slot:content>
      <router-view></router-view>
    </template>
  </nav-content>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import NavContent from '@/views/components/NavContent.vue'

export default {
  name: 'Profolio',
  components: {
    NavContent
  },
  data() {
    return {
      tab: null
    }
  },
  computed: {
    ...mapState('profolio', { profolio: 'items', collectionName: 'collectionName', color: 'color' }),
    isDesktop() {
      return this.$vuetify.breakpoint.mdAndUp
    }
  },
  mounted() {
    this.loadProfolio()
  },
  methods: {
    ...mapActions('profolio', { loadProfolio: 'getAll' }),
    buildPath(id) {
      return `/a/${this.$route.params.alias}/profolio/${id}`
    }
  }
}
</script>

<style lang="scss" scoped></style>