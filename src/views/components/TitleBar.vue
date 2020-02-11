<template>
  <div class="title-bar" style="background-color: #212121;">
    <v-app-bar-nav-icon large dark @click="$emit('toggleDrawer')">
    </v-app-bar-nav-icon>
  </div>
</template>

<script>
export default {
  name: 'TitleBar'
}
</script>

<style lang="scss" scoped>
.title-bar {
  position: sticky;
  z-index: 5;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  padding: 12px;
}
</style>
