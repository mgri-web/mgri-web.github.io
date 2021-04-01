<template>
  <div class="app">
    <transition name="fade" mode="out-in">
      <FixedBackground v-if="showBalls" />
    </transition>
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
import AOS from 'aos'
import 'aos/dist/aos.css'
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

  data: () => ({
    showBalls: false,
  }),

  computed: {
    showLoadingBar (): boolean {
      return this.$accessor.ui.loadingBar
    },
    errorMessage ():String {
      return this.$accessor.ui.errorText
    },
    informMessage ():String {
      return this.$accessor.ui.informText
    },
  },

  mounted () {
    if (!process.client) { return }
    this.showBalls = true
    setTimeout(() => {
      AOS.init({
        once: true,
      })
    }, 1700)
  },
})
</script>

<style lang="stylus">
.app
  width 100vw
  height 100vh
  overflow-y auto
</style>
