<template>
  <div
    id="maindiv"
    :class="{ content: true, vertical: !isDesktop, horizontal: isDesktop }"
  >
    <section class="nav" :class="`${bgColor} darken-2`">
      <v-card flat dark color="rgba(0, 0, 0, 0)">
        <v-card-title>
          <h1 class="display-2 mb-2">
            {{ title }}
          </h1>
        </v-card-title>
        <slot name="nav"></slot>
      </v-card>
    </section>
    <section class="main">
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
      return this.$vuetify.breakpoint.lgAndUp
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
    grid-template-rows: 212px auto;
    section {
      max-width: 100vw;
    }
    .nav {
      top: -146px;
      z-index: 2;
      padding-top: 48px;
    }
  }
  &.horizontal {
    height: 100%;
    grid-template-columns: 412px auto;
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
