<template>
  <div
    id="maindiv"
    :class="{ content: true, vertical: !isDesktop, horizontal: isDesktop }"
  >
    <section class="nav" :style="`background-color: ${bgColor}`">
      <v-card flat dark color="rgba(0, 0, 0, 0)">
        <v-card-title>
          <h1 class="display-2 mb-4">
            {{ title }}
          </h1>
        </v-card-title>
        <slot name="nav"></slot>
      </v-card>
    </section>
    <section class="main">
      <slot name="content"> </slot>
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
    grid-template-rows: 168px auto;
    section {
      width: 100%;
    }
  }
  &.horizontal {
    height: 100%;
    grid-template-columns: 384px auto;
    section {
      height: 100%;
    }
    .nav {
      position: sticky;
      top: 0;
      padding: 8vh 0 16vh;
    }
  }
  .nav {
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
