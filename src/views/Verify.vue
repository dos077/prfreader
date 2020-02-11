<template>
  <v-container>
    <v-row align-content="center" justify="center" style="width: 100%; height: 100%">
      <v-col style="max-width: 500px">
        <v-card outlined>
          <v-card-title>Loading User Profolio...</v-card-title>
          <v-card-text class="text-align-center">
            <v-progress-circular indeterminate></v-progress-circular>
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
  async created() {
    await this.loadProfile(this.$route.params.alias)
    if (!this.profile || !this.profile.userId) this.$router.push('/')
    else this.$router.push(this.$route.query.redirectUrl)
  },
  methods: {
    ...mapActions('alias', { loadProfile: 'read' })
  }
}
</script>