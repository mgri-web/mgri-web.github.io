<template>
  <div class="page">
    <h1 v-text="$t('pageTitle')" />
    <nuxt-link to="/help" />
  </div>
</template>

<i18n>
{
  "en": {
    "pageTitle": "Hello, ni4ego, 6to z on england?"
  },
  "ru": {
    "pageTitle": "Привчики"
  }
}
</i18n>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'default',
  // ост
  mounted () {
    console.log(this.$i18n.locale)
  },
  // мета
  head () {
    return {
      title: String(this.$t('pageTitle'))
    }
  }
})
</script>

<style lang="stylus">

</style>
