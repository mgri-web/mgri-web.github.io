<template>
  <div class="loading">
    <div class="loading__line" :style="{maxWidth: `${progress}%`}" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LoadingBar',
  data () {
    return {
      progress: 0,
      intervalContainer: null,
    }
  },
  computed: {
    isDone ():Boolean {
      return this.$accessor.ui.loadingDone
    },
  },
  mounted () {
    let period = 500
    this.intervalContainer = setInterval(() => {
      if (this.progress < 50) {
        // Резко подгружаем наполовину
        this.progress += 50
        // потихоньку двигаем
      } else if (this.progress <= 85 && !this.isDone) {
        this.progress += 6
      } else if (this.isDone) {
        this.progress = 100
        setTimeout(() => {
          clearInterval(this.intervalContainer)
          this.$accessor.ui.setLoadingStatus(false)
        }, 700)
      }
      period = Math.round(Math.random() * 100 + 100)
    }, period)
  },
  beforeDestroy () {
    clearInterval(this.intervalContainer)
  },
})
</script>

<style lang="stylus" scoped>
.loading
  position fixed
  top 0
  left 0
  z-index 1000
  width 100vw
  height 4px
  display flex
  justify-content flex-start

  &__line
    transition max-width .3s ease-in-out
    height 100%
    width 100%
    background-color chartreuse
</style>
