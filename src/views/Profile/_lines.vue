<template>
  <v-card :color="focus ? '' : 'grey darken-2'" :dark="!focus" :flat="!focus">
    <v-card-text v-for="(line, index) in section.lines" :key="index">
      <v-container>
        <v-row>
          <v-col cols="7">
            <h2 class="title">{{ line.title }}</h2>
            <h4 class="subtitle-2">{{ line.subTitle }}</h4>
          </v-col>
          <v-col cols="5" class="text-right">
            <h2 class="title">{{ line.secondTitle }}</h2>
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
export default {
  name: 'LinesSection',
  props: {
    section: Object,
    focus: Boolean
  }
}
</script>