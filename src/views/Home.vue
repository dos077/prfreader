<template>
  <router-view></router-view>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'UserPage',

  computed: {
    ...mapState('alias', { currentProfile: 'current' }),
    isDesktop() {
      return this.$vuetify.breakpoint.mdAndUp
    },
    alias() {
      return this.$route.params.alias
    }
  },

  watch: {
    alias: {
      async handler(to, from) {
        if (!from || to !== from) await this.readAlias(to)
        if (!this.currentProfile || !this.currentProfile.userId) this.$router.push('/')
      },
      immediate: true
    }
  },
  
  methods: {
    ...mapActions('alias', { readAlias: 'read' })
  }
}
</script>

