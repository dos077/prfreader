<template>
  <v-card :dark="!focus" :flat="!focus" :color="focus ? '' : 'grey darken-2'">
    <v-card-text>
      <v-chip-group column>
        <v-chip v-for="(chip, index) in section.chips" :key="index" :color="focus ? 'grey lighten-2' : 'grey'">
          <v-icon v-if="chip.icon" class="mr-2">{{ chip.icon }}</v-icon>{{ chip.text }}
        </v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ChipsSection',
  props: {
    section: Object,
    focus: Boolean
  }
}
</script>