<template>
  <div class="title-bar" :class="{ mobile: !isDesktop }">
    <v-app-bar-nav-icon large dark @click="$emit('toggleDrawer')">
    </v-app-bar-nav-icon>
  </div>
</template>

<script>
export default {
  name: 'TitleBar',
  computed: {
    isDesktop() {
      return this.$vuetify.breakpoint.mdAndUp
    }
  }
}
</script>

<style lang="scss" scoped>
.title-bar {
  position: fixed;
  z-index: 5;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 12px;
  width: 72px;
  height: 100vh;
  &.mobile {
    position: absolute;
    width: 100vw;
    height: 64px;
  }
}
</style>
