<template>
  <div class="aspect-ratio">
    <iframe
      class="videoplayer"
      src="https://www.youtube.com/embed/d4Zuru9R9_U"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AlmaVideo',

})
</script>

<style lang="stylus" scoped>
.aspect-ratio
  position relative
  width 100%
  padding-top 56.25%

.videoplayer
  position absolute
  top 0
  left 0
  width 100%
  height 100%
</style>
