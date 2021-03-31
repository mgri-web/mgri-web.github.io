<template>
  <div class="app">
    <FixedBackground />
    <transition>
      <LoadingBar v-if="showLoadingBar" />
    </transition>
    <transition>
      <InformBanner v-if="errorMessage || informMessage" />
    </transition>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LoadingBar from '~/components/LoadingBar.vue'
import InformBanner from '~/components/InformBanner.vue'
import FixedBackground from '~/components/FixedBackground.vue'

export default Vue.extend({
  name: 'Default',
  components: {
    LoadingBar,
    InformBanner,
    FixedBackground,
  },
  computed: {
    showLoadingBar (): boolean {
      return this.$accessor.ui.loadingBar
    },
    errorMessage ():String {
      return this.$accessor.ui.errorText
    },
    informMessage ():String {
      return this.$accessor.ui.informText
    }
  }
})
</script>

<style lang="stylus">
.app
  width 100vw
  height 100vh
  overflow-y auto
</style>
