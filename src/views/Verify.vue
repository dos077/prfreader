<template>
  <v-container>
    <v-row align-content="center" justify="center" style="width: 100%; height: 100%">
      <v-col style="max-width: 500px">
        <v-card outlined>
          <v-card-title>Loading User Profolio...</v-card-title>
          <v-card-text class="text-align-center">
            <v-progress-linear indeterminate />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'AliasVerification',
  computed: {
    ...mapState('alias', { profile: 'current' })
  },
  watch: {
    profile: {
      handler(to) {
        if (to === undefined) return
        if (!to || !to.userId) return this.$router.push('/noalias')
        if (this.$route.query.redirectUrl === this.$route.path) return this.$router.push('/')
        this.$router.push(this.$route.query.redirectUrl)
      },
      immediate: true
    }
  },
  mounted() {
    this.loadProfile(this.$route.query.alias)
  },
  methods: {
    ...mapActions('alias', { loadProfile: 'read' })
  }
}
</script>