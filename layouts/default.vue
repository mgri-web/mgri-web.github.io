<template>
  <div class="app">
    <!-- Лоадинг-бар -->
    <transition>
      <LoadingBar v-if="showLoadingBar" />
    </transition>
    <!-- Всплывашка сверху с оповещением -->
    <transition>
      <InformBanner v-if="errorMessage || informMessage" />
    </transition>
    <!-- Поп-ап -->
    <transition name="appear">
      <FullscreenPopup v-if="popUpContent" />
    </transition>
    <!--    сама страничка-->
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import LoadingBar from '~/components/LoadingBar.vue'
import InformBanner from '~/components/InformBanner.vue'
import FullscreenPopup from '~/components/PopUp/FullscreenPopup.vue'

export default Vue.extend({
  name: 'Default',
  components: {
    LoadingBar,
    InformBanner,
    FullscreenPopup,
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
    },
    popUpContent () {
      return this.$accessor.ui.popupContent
    },
  },

  created () {
    // хз, некогда разбираться
    this.$accessor.ui.setPopupContent(null)
  },

  mounted () {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (!process.client) { return }
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
