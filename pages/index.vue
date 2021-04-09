<!--suppress ES6UnusedImports, TypeScriptCheckImport -->
<template>
  <div class="page">
    <div class="container">
      <h1 class="page__title">
        {{ $t('pageTitle') }}
        <div
          ref="baffle"
        />
      </h1>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "pageTitle": "Intro to"
  },
  "ru": {
    "pageTitle": "Введение в"
  }
}
</i18n>

<script lang="ts">
import Vue from 'vue'
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
      // baffle.text(t => this.getTitleTextNext())
      baffle.reveal(1000)
    },
    getTitleTextNext () {
      const locale = this.$i18n.locale
      // ТС не может в обращение такое, по ходу
      // @ts-ignore
      const currentTextArray: Array<string> = this.titleTextIndex[locale]
      const currentIndex = (this.titleTextIndex < currentTextArray.length) ? 0 : 1
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
.page__title
  fontSemiBold()
</style>
