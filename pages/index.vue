<!--suppress ES6UnusedImports, TypeScriptCheckImport -->
<template>
  <div class="page">
    <div class="container">
      <h1 class="page__title">
        {{ $t('pageTitle') }}
        <div
          ref="baffle"
          v-text="$t('pageTitleBaffleInit')"
        />
      </h1>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "pageTitle": "Intro to",
    "pageTitleBaffleInit": "web development",
    "pageTitleBaffleDone": "software development"
  },
  "ru": {
    "pageTitle": "Введение в",
    "pageTitleBaffleInit": "веб-разработку",
    "pageTitleBaffleDone": "программирование"
  }
}
</i18n>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import baffle from 'baffle'

export default Vue.extend({
  layout: 'default',

  data: () => ({
    baffleEl: null,
  }),

  methods: {
    initBaffle () {
      const baffleELement = this.$refs.baffle
      const parameters = {
        characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ',
        speed: 40,
      }

      this.baffleEl = baffle(baffleELement).set(parameters)
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

</style>
