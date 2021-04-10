<template>
  <div class="pop-up">
    <div class="pop-up__helper" @click="closePopUp">
      <div class="pop-up__close" v-text="'X'" />
    </div>
    <div class="pop-up__content">
      <component
        :is="contentFactory(popUpContent)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AlmaVideo from '~/components/PopUp/AlmaVideo.vue'

export default Vue.extend({
  name: 'FullscreenPopup',

  components: {
    AlmaVideo,
  },

  computed: {
    popUpContent () {
      return this.$accessor.ui.popupContent
    },
  },

  methods: {
    contentFactory (type: string) {
      switch (type) {
        case 'video':
          return AlmaVideo
        default:
          return null
      }
    },
    closePopUp () {
      this.$accessor.ui.setPopupContent(null)
    },
  },

})
</script>

<style lang="stylus" scoped>
.pop-up
  width 100vw
  height 100vh
  position fixed
  z-index 10
  background-color rgba(0,0,0, .7)
  backdrop-filter blur(10px)
  display flex
  flex-direction column
  justify-content center
  padding 50px 25px

  &__content
    margin 0 auto
    width 100%
    max-width 1000px

  &__helper
    position absolute
    top 25px
    right 25px

  &__close
    font-size 40px
    fontBold()
    color white
    cursor pointer
    padding 25px
    margin -25px

</style>
