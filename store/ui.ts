import { mutationTree } from 'nuxt-typed-vuex'
import { ViewportInfo } from '@/plugins/viewportSizeHandler'

export const state = () => ({
  // viewport
  windowWidth: null as ViewportInfo['windowWidth'],
  windowHeight: null as ViewportInfo['windowHeight'],
  documentWidth: null as ViewportInfo['documentWidth'],
  documentHeight: null as ViewportInfo['documentHeight'],
  scrollbarWidth: null as ViewportInfo['scrollbarWidth'],

  // ui features
  loadingBar: false as boolean,
  loadingDone: false as boolean,
  errorText: null as String,
  informText: null as String,
})

export const mutations = mutationTree(state, {
  // Adaptive
  updateViewportInfo (state, payload: ViewportInfo) {
    state.windowWidth = payload.windowWidth
    state.windowHeight = payload.windowHeight
    state.documentWidth = payload.documentWidth
    state.documentHeight = payload.documentHeight
    state.scrollbarWidth = payload.scrollbarWidth
  },
  // ui features, <3 Andrey
  setLoadingStatus (state, payload: boolean) {
    state.loadingBar = payload
  },
  setLoadingDone (state) {
    state.loadingDone = true
  },
  setErrorText (state, payload: String) {
    state.errorText = payload
  },
  setInformText (state, payload: String) {
    state.informText = payload
  },
})
