<template>
  <div
    id="maindiv"
    :class="{ content: true, vertical: !isDesktop, horizontal: isDesktop }"
  >
    <section class="nav" :class="`${bgColor} darken-3`">
      <v-card flat dark color="rgba(0, 0, 0, 0)" class="pa-1">
        <h1 class="mb-2 text-h4 text-md-h3 text-xl-h2 text-center">
          {{ title }}
        </h1>
        <slot name="nav"></slot>
      </v-card>
    </section>
    <section class="main" :class="`${bgColor} lighten-5`">
      <slot name="content"></slot>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NavContent',
  props: {
    bgColor: String,
    title: String
  },
  computed: {
    isDesktop() {
      return this.$vuetify.breakpoint.mdAndUp
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  display: grid;
  &.vertical {
    grid-template-columns: 1fr;
    grid-template-rows: 160px auto;
    section {
      max-width: 100vw;
    }
    .nav {
      top: -102px;
      z-index: 2;
      padding-top: 48px;
    }
  }
  &.horizontal {
    height: 100%;
    grid-template-columns: minmax(406px, 30vw) auto;
    section {
      height: 100%;
    }
    .nav {
      top: 0;
      padding: 8vh 16px 16vh 52px;
    }
    .main {
      height: auto;
    }
  }
  .nav {
    position: sticky;
    display: flex;
    max-height: 100vh;
    padding-right: 16px;
    align-items: center;
    justify-content: center;
    color: white;
  }
  .current {
    color: white;
  }
}
</style>
