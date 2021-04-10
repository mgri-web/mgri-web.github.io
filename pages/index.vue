<!--suppress ES6UnusedImports, TypeScriptCheckImport -->
<template>
  <div class="page">
    <section class="promo">
      <div class="container flex-desc">
        <!-- Тайтол -->
        <div class="page__block">
          <h1 class="page__title">
            {{ $t('pageTitle') }}
            <br>
            <span ref="baffle">{{ $t('pageSubtitle') }}</span>
          </h1>
        </div>
        <!-- Разраб -->
        <div class="page__image">
          <img src="/svg/web-monkey.svg" alt="Web-developer">
        </div>
      </div>
    </section>
  </div>
</template>

<i18n>
{
  "en": {
    "pageTitle": "Intro to",
    "pageSubtitle": "web development"
  },
  "ru": {
    "pageTitle": "Введение в",
    "pageSubtitle": "веб-разработку"
  }
}
</i18n>

<script lang="ts">
import Vue from 'vue'
import random from 'lodash.random'
// TS ругается на типы, их в баффл не завезли =\
// @ts-ignore
import baffle from 'baffle'

export default Vue.extend({
  layout: 'default',

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
      const currentIndex = (this.titleTextIndex === (currentTextArray.length - 1)) ? 0 : (currentTextArray.length - 1)

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

  },

  // мета
  head () {
    return {
      title: String(this.$t('pageTitle')),
    }
  },

  transition: {
    name: 'fade',
    mode: 'out-in',
    afterLeave (el) {
      console.log('afterLeave index page', el)
    },
  },
})
</script>

<style lang="stylus">
.page
  padding-top 100px

  &__title
    fontSemiBold()
    +gt-lg()
      font-size 44px
</style>
