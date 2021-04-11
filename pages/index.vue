<template>
  <div class="page">
    <SectionPromo />
  </div>
</template>

<i18n>
{
  "en": {
    "pageTitle": "Intro to web development at MGRI"
  },
  "ru": {
    "pageTitle": "Введение в веб-разработку в РГГРУ"
  }
}
</i18n>

<script lang="ts">
import Vue from 'vue'
import SectionPromo from '~/components/SectionPromo.vue'

export default Vue.extend({
  layout: 'default',

  components: {
    SectionPromo,
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
</style>
