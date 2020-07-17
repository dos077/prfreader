<template>
  <v-card :outlined="!focus">
    <v-toolbar
      :color="focus ? `${color} lighten-4` : ''"
      :class="{ 'text--primary': focus, 'outfocus': !focus }"
      flat
    >
      <h2 class="title">{{ section.name }}</h2>
    </v-toolbar>
    <v-card-text>
      <v-container :class="{ 'text--primary': focus }">
        <v-row dense class="mb-4" v-for="(line, index) in section.lines" :key="index">
          <v-col cols="7">
            <h2 class="title">{{ line.title }}</h2>
            <h4 class="subtitle-2">{{ line.subTitle }}</h4>
          </v-col>
          <v-col cols="5" class="text-right">
            <h4 class="subtitle-2">{{ line.secondTitle }}</h4>
            <h4 class="subtitle-2">{{ line.secondSub }}</h4>
          </v-col>
          <v-col cols="12">
            <ul>
              <li v-for="(pb, index) in line.bulletPb" :key="index">
                {{ pb }}
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LinesSection',
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
.text--primary {
  h2, h4 {
    color: #212121;
  }
  li {
    color: #424242;
  }
}
.outfocus {
  color: #424242;
  h2 {
    color: #616161;
  }
}
</style>
