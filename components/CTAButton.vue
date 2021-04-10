<template>
  <div class="cta" @click="openPopUp">
    <p class="cta__text" v-text="$t('ctaText')" />
  </div>
</template>

<i18n>
{
  "en": {
    "ctaText": "Get started",
    "ctaLink": "https://inter-mgri.ru/contacts/"
  },
  "ru": {
    "ctaText": "Записаться",
    "ctaLink": "https://inter-mgri.ru/contacts/"
  }
}
</i18n>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CTAButton',

  methods: {
    openPopUp () {
      this.$accessor.ui.setPopupContent('goto')
    },
  },
})
</script>

<style lang="stylus" scoped>
.cta
  border-radius 4px
  background-color #00FF66
  padding 15px 30px
  fontSemiBold()
  font-size 16px
  display inline-flex
  cursor pointer
  will-change transform
  transition-property all
  transition-timing-function ease-in-out
  transition-duration .3s
  animation-name calltoaction
  animation-duration 4s
  animation-iteration-count infinite
  animation-delay 3s

  &:hover
    transform translate3d(0, -20px, 0)
    animation none
</style>
