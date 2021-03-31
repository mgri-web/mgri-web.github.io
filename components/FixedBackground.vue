<template>
  <div class="bg-wrapper">
    <div
      v-for="(blob, index) in blobsArrayDesktop"
      :key="'blob-'+index"
      class="bg-blob"
      :class="[blob.size, blob.position]"
      :style="{
        animationDuration: blob.duration + 's',
        backgroundColor: blob.color,
        animationDirection: blob.direction
      }"
    />
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
        duration: 35,
        position: 'top-51 left-80',
        direction: 'reverse',
      },
      {
        size: 'lg',
        color: '#61ff00',
        duration: 44,
        position: 'top-30 left-20',
        direction: 'normal',
      },
      {
        size: 'xl',
        color: '#002DFF',
        duration: 88,
        position: 'top-44 left-60',
        direction: 'reverse',
      },
      {
        size: 'md',
        color: '#f8ff00',
        duration: 101,
        position: 'top-70 left-79',
        direction: 'reverse',
      },
      {
        size: 'sm',
        color: '#00aa99',
        duration: 22,
        position: 'top-66 left-39',
        direction: 'normal',
      },
    ],
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
    overflow hidden

  &-blob
    position absolute
    min-height 1vh
    min-width 1vh
    animation-name blob, float
    animation-timing-function ease-in-out
    animation-iteration-count infinite

    &.xs
      width 5vh
      height 5vh

    &.sm
      width 10vh
      height 10vh

    &.md
      width 15vh
      height 15vh

    &.lg
      width 20vh
      height 20vh

    &.xl
      width 30vh
      height 30vh

@keyframes blob {
  0% {
    border-radius: 65% 60% 35% 50% / 65% 38% 75% 36%;
  }
  25% {
    border-radius: 89% 54% 62% 42% / 83% 45% 75% 63%;
  }
  50% {
    border-radius: 65% 60% 35% 50% / 65% 38% 75% 36%;   }
    25% {
    border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%;
  }
  50% {
    border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%;   }
  75% {
    border-radius: 89% 54% 62% 42% / 83% 45% 75% 63%;
  }
  100% {
    border-radius: 65% 60% 35% 50% / 65% 38% 75% 36%;   }
}

@keyframes float {
 0% {  transform: rotate(0deg) translateX(0%) translateY(0%); }
 25% {  transform: rotate(10deg) translateX(35%) translateY(-100%);}
 50% {  transform: rotate(0deg) translateX(-35%) translateY(100%);}
 100% {  transform: rotate(0deg) translateX(0%) translateY(0%); }
}

for num in (30..80)
  .top-{num}
    top: num * 1%
  .left-{num}
    left: num * 1%
</style>
