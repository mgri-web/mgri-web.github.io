import { getAccessorType } from 'typed-vuex'
import * as ui from '~/store/ui.ts'
// Keep your existing vanilla Vuex code for state, getters, mutations, actions, plugins, etc.

// This compiles to nothing and only serves to return the correct type of the accessor
export const accessorType = getAccessorType({
  modules: {
    ui,
  },
})
