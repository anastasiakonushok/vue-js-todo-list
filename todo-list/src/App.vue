<template>
  <div class="wrapp">
    <HeaderNav />
    <router-view />
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue'

export default {
  components: {
    HeaderNav
  }
}
</script>

<style lang="scss">
@import "@/assets/style/main.scss";
@import "@/assets/style/variable.scss";
@import "~sass-reset";
</style>
