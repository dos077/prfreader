<template>
  <nav-content :title="'Web Profolio'" :bg-color="'#ef6c00'">
    <template v-slot:nav>
      <v-tabs
        v-model="tab"
        :vertical="isDesktop"
        grow
        background-color="rgba(0,0,0,0)"
        :slider-size="isDesktop ? '0' : '2'"
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
    ...mapState('profolio', { profolio: 'items' }),
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
      return `/${this.$route.params.alias}/profolio/${id}`
    }
  }
}
</script>

<style lang="scss" scoped></style>