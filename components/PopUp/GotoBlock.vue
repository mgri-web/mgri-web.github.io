<template>
  <div class="goto">
    <p class="goto__title" v-text="$t('title')" />
    <p class="goto__descr" v-text="$t('description')" />
    <div class="goto__buttons">
      <a :href="$t('ctaLink')" target="_blank" class="goto__cta">
        <CTAButton :text="$t('submit')" />
      </a>
      <p class="goto__decline" @click="closePopUp" v-text="$t('decline')" />
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "title": "At this moment the course is only available in Russian",
    "description": "At this moment the course is only available in Russian",
    "submit": "I understand, let me go",
    "decline": "Oh, maybe later",
    "ctaLink": "https://inter-mgri.ru/contacts/"
  },
  "ru": {
    "title": "Переход на сайт университета",
    "description": "Чтобы записаться на курс, необходимо обратиться в Институт повышения квалификации и дополнительного образования (ИПКиДО) РГГРУ",
    "submit": "Здорово, вперёд!",
    "decline": "Чуть позже",
    "ctaLink": "https://inter-mgri.ru/contacts/"
  }
}
</i18n>

<script lang="ts">
import Vue from 'vue'
import CTAButton from '~/components/CTAButton.vue'

export default Vue.extend({
  name: 'GotoBlock',

  components: {
    CTAButton,
  },

  methods: {
    closePopUp () {
      this.$accessor.ui.setPopupContent(null)
    },
  },

})
</script>

<style lang="stylus" scoped>
.goto
  border 4px solid #00FF66
  border-radius 24px
  padding 20px 40px
  background-color white
  width 100%
  max-width 460px
  margin 0 auto

  &__title
    color #00FF66
    fontBold()
    text-align center
    +gt-lg()
      font-size 30px
      margin-bottom 35px

  &__descr
    fontRegular()
    text-align center
    +gt-lg()
      font-size 18px
      margin-bottom 40px

  &__buttons
    display flex
    flex-direction column
    justify-content center
    align-items center

    @media (min-width: 768px)
      flex-direction row
      justify-content space-between
      padding-right 35px

  &__cta
    margin-bottom 30px
    @media (min-width: 768px)
      margin-bottom 0

  &__decline
    fontSemiBold()
    font-size 16px
    cursor pointer
    padding 20px
    margin -20px
</style>
