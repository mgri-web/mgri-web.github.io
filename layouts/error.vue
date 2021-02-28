<template>
  <div class="error-page">
    <h1 v-if="error.statusCode === 404" class="error-page__title">
      {{ $t('notFound') }}
    </h1>
    <h1 v-else class="error-page__title">
      {{ $t('fallbackError') }}
    </h1>
    <NuxtLink to="/" class="error-page__link">
      {{ $t('qooda') }}
    </NuxtLink>
  </div>
</template>

<i18n>
{
  "ru": {
    "notFound": "Страница не найдена",
    "fallbackError": "Ошибка случилась",
    "qooda": "На главную",
    "title": "Ошибка"
  },
  "en": {
    "notFound": "Page not found",
    "fallbackError": "An error occurred",
    "qooda": "Home page",
    "title": "Error"
  }
}
</i18n>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Error',
  props: ['error'],
  layout: 'error',
  head () {
    return {
      title: String(this.$t('title'))
    }
  }
})
</script>

<style lang="stylus" scoped>

</style>
