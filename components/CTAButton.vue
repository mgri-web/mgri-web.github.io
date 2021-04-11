<template>
  <div class="cta">
    <p class="cta__text" v-text="text" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CTAButton',

  props: {
    text: {
      type: String,
      default: '',
    },
  },

})
</script>

<style lang="stylus" scoped>
.cta
  border-radius 4px
  background-color #00FF66
  padding 15px 30px
  display inline-flex
  cursor pointer
  will-change animation
  transition-property transform
  transition-timing-function ease-in-out
  transition-duration .3s
  animation-name calltoaction
  animation-duration 4s
  animation-iteration-count infinite
  animation-delay 3s

  &:hover
    transform translate3d(0, -20px, 0) scale(1.1, 1.1)
    animation none

  &__text
    fontSemiBold()
    color white
    font-size 16px
</style>
