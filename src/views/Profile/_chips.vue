<template>
  <v-card
    :dark="!focus"
    :flat="!focus"
    :color="focus ? '' : color"
  >
    <v-toolbar
      :color="focus ? `${color} lighten-4` : color"
      :class="{ 'text--primary': focus }"
      flat
      :dark="!focus"
    >
      <h2 class="title">{{ section.name }}</h2>
    </v-toolbar>
    <v-card-text>
      <v-chip-group column>
        <v-chip
          v-for="(chip, index) in section.chips"
          :key="index"
          :color="focus ? `${color} lighten-4` : `${color} darken-1`"
          class="ma-2"
        >
          <v-icon v-if="chip.icon" class="mr-2">{{ chip.icon }}</v-icon>{{ chip.text }}
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