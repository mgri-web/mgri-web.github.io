<template>
  <section class="promo">
    <div class="container flex-desc">
      <div class="promo__block">
        <!-- Из-за баффла сложно выносить в отдельный компонент -->
        <!-- Тайтол -->
        <h1 class="promo__title">
          {{ $t('pageTitle') }}
          <br>
          <span ref="baffle">{{ $t('pageSubtitle') }}</span>
        </h1>
        <!-- Descr -->
        <div class="promo__description">
          <p class="promo__description-text">
            {{ $t('pageDescription') }} <a class="promo__description-link" :href="$t('almaLink')" title="Mente et Malleo" target="_blank" v-text="$t('almaLinkText')" />
          </p>
        </div>
        <!-- Buttons -->
        <div class="promo__cta">
          <CTAButton class="promo__cta-button" :text="$t('ctaText')" @click.native="openPopUp('goto')" />
          <div class="promo__alma" @click="openPopUp('video')">
            <img src="/svg/play.svg" alt="Play" class="promo__alma-img">
            <p class="promo__alma-text" v-text="$t('almaVideoText')" />
          </div>
        </div>
      </div>
      <!-- Разраб temp -->
      <div class="promo__image">
        <img src="/svg/web-monkey.svg" alt="Web-developer">
      </div>
    </div>
  </section>
</template>

<i18n>
{
  "en": {
    "pageTitle": "Intro to",
    "pageSubtitle": "web development",
    "pageDescription": "Learn to create modern websites and applications at",
    "almaLinkText": "Russian State University for Geological Prospecting",
    "almaLink": "https://mgri.ru/en/",
    "almaVideoText": "Promo-video",
    "ctaText": "Get started"
  },
  "ru": {
    "pageTitle": "Введение в",
    "pageSubtitle": "веб-разработку",
    "pageDescription": "Научитесь создавать современные сайты и приложения в",
    "almaLinkText": "РГГРУ им. Серго Орджоникидзе",
    "almaLink": "https://mgri.ru/",
    "almaVideoText": "Посмотреть видео",
    "ctaText": "Записаться"
  }
}
</i18n>

<script lang="ts">
import random from 'lodash.random'
// TS ругается на типы, их в баффл не завезли =\
// @ts-ignore
import baffle from 'baffle'
import Vue from 'vue'
import CTAButton from '~/components/CTAButton.vue'

export default Vue.extend({
  name: 'SectionPromo',

  components: {
    CTAButton,
  },

  data: () => ({
    baffleEl: null,
    titleTextIndex: 0 as number,
    titleText: {
      en: ['web development', 'software development'],
      ru: ['веб-разработку', 'программирование'],
    },
  }),

  mounted () {
    if (!process.client) { return }
    this.initBaffle()
    this.initLogoTextAnimation()
  },

  methods: {
    // Baffle
    // Зобрал с Себура, ибо коротко и то, что нужно
    initBaffle () {
      const baffleELement = this.$refs.baffle
      const parameters = {
        characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ',
        speed: 40,
      }
      this.baffleEl = baffle(baffleELement).set(parameters)
    },
    sleep (ms: number): Promise<boolean> {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    animateText () {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      this.baffleEl.text((t:any) => this.getTitleTextNext())
      this.baffleEl.reveal(1000)
    },
    getTitleTextNext ():string {
      const locale = this.$i18n.locale
      // ТС не может в обращение по индексу такое, по ходу
      // @ts-ignore
      const currentTextArray: Array<string> = this.titleText[locale]
      const currentIndex = (this.titleTextIndex === (currentTextArray.length - 1)) ? 0 : (this.titleTextIndex + 1)

      this.titleTextIndex = currentIndex
      // @ts-ignore
      return this.titleText[locale][currentIndex]
    },
    initLogoTextAnimation () {
      const loopAnimateText = async () => {
        await this.sleep(random(4000, 5000))
        this.animateText()
        loopAnimateText()
      }
      loopAnimateText()
    },

    // PopUp
    openPopUp (payload: string) {
      this.$accessor.ui.setPopupContent(payload)
    },
  },

})
</script>

<style lang="stylus" scoped>
.promo

  &__block
    width 100%
    flex-shrink 0
    overflow visible
    +md()
      padding-top 40px
      margin-bottom 20px
    +lg()
      width 40%
      padding-top 80px
    +gt-lg()
      width 40%
      padding-top 80px

  &__image
    display flex
    justify-content center
    width 100%
    +lg()
      justify-content flex-end
    +gt-lg()
      justify-content flex-end

  &__title
    fontBold()
    will-change contents
    +lt-md()
      font-size 50px
      margin-bottom 40px
    +md()
      font-size 50px
      margin-bottom 40px
    +lg()
      font-size 44px
      margin-bottom 45px
    +gt-lg()
      font-size 44px
      margin-bottom 45px

  &__description
    fontRegular()
    font-size 16px
    margin-bottom 40px
    +md()
      font-size 20px
      margin-bottom 40px
    +lg()
      font-size 18px
      margin-bottom 65px
    +gt-lg()
      font-size 18px
      margin-bottom 65px

    &-link
      fontSemiBold()
      color #7752BE
      text-decoration underline
      text-decoration-color #FF9900
      transition background-color .3s ease-in-out, color .3s ease-in-out

      &:hover
        background-color blue
        color white

  &__cta
    display flex
    flex-direction column
    align-items center

    @media (min-width 768px)
      flex-direction row

    &-button
      margin-bottom 20px

      @media (min-width 768px)
        margin-bottom 0
        margin-right 40px

  &__alma
    cursor pointer
    text-decoration underline
    text-decoration-color #FF9900
    display flex
    padding 25px
    margin -25px
    transition transform .3s ease-in-out

    &:hover
      transform scale(1.1, 1.1)

    &-img
      margin-right 8px
</style>
