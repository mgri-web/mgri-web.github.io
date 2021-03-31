<template>
  <div class="infobanner" :style="{ backgroundColor : errorMessage ? 'red' : 'green'}">
    <div class="infobanner__text">
      {{ errorMessage || informMessage }}
    </div>
    <div class="infobanner__button" @click="closeBanner">
      <div class="infobanner__close" v-text="'X'" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'InformBanner',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  computed: {
    errorMessage ():String {
      return this.$accessor.ui.errorText
    },
    informMessage ():String {
      return this.$accessor.ui.informText
    },
  },
  mounted () {
    setTimeout(() => {
      this.closeBanner()
    }, 7000)
  },
  methods: {
    closeBanner () {
      this.$accessor.ui.setErrorText(null)
      this.$accessor.ui.setInformText(null)
    },
  },
})
</script>

<style lang="stylus" scoped>
.infobanner
  display flex
  width 100vw
  padding 8px 15px
  position fixed
  top 0
  left 0

  &__text
    fontBold()
    color white
    padding-right 15px
    width 100%
    text-align center

  &__button
    cursor pointer
    width 30px
    height 100%
    flexCenter()
    flex-shrink 0

  &__close
    width 100%
    height 100%
    fontBlack()
    color white
    text-align center
</style>
