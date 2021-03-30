<template>
  <div class="bg-wrapper">
    <div class="bg-blob" /></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
   name: 'FixedBackground',

  data: () => ({
      blobsArrayDesktop: [
        {
          size: 'xl',
          color: '#fa3b56',
          duration: 5,
        }
      ]
  }),
})
</script>

<style lang="stylus">
.bg
  &-wrapper
    position fixed
    width 100vw
    height 100vh
    top 0
    bottom 0
    left 0
    right 0
    z-index -1
    pointer-events none 
    user-select none

</style>
