<template>
  <h1 v-text="$t('helpText')" />
</template>

<i18n>
{
  "ru": {
    "helpText": "Помощь"
  },
  "en": {
    "helpText": "Help"
  }
}
</i18n>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Help'
})
</script>

<style lang="stylus" scoped>

</style>
