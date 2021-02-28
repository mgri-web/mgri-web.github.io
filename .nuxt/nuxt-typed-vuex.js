import { getAccessorFromStore } from 'typed-vuex'

import { createStore } from 'E:/mgri/mgri-web.github.io/.nuxt/store'

const storeAccessor = getAccessorFromStore(createStore())

export default async ({ store }, inject) => {
  inject('accessor', storeAccessor(store))
}
