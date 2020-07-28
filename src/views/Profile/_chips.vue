<template>
  <v-card :outlined="!focus" tile>
    <v-toolbar
      :color="focus ? `${color} lighten-4` : ''"
      :class="{ 'text--primary': focus, 'outfocus': !focus }"
      flat
      light
    >
      <h2 class="title">{{ section.name }}</h2>
    </v-toolbar>
    <v-card-text>
      <v-chip-group column>
        <v-chip
          v-for="(chip, index) in section.chips"
          :key="index"
          :color="focus ? `${color} lighten-4` : `${color} lighten-5`"
          class="ma-2"
        >
          <v-icon v-if="chip.icon" class="mr-2" :class="{ 'outfocus': !focus }">{{ chip.icon }}</v-icon>
          <span :class="{ 'outfocus': !focus }">{{ chip.text }}</span>
        </v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ChipsSection',
  props: {
    section: Object,
    focus: Boolean
  },
  computed: {
    ...mapState('profile', ['color']),
  }
}
</script>

<style lang="scss" scoped>
.outfocus {
  color: #424242;
  h2 {
    color: #616161;
  }
}
</style>