export { default as InformBanner } from '../..\\components\\InformBanner.vue'
export { default as LoadingBar } from '../..\\components\\LoadingBar.vue'

export const LazyInformBanner = import('../..\\components\\InformBanner.vue' /* webpackChunkName: "components_InformBanner" */).then(c => c.default || c)
export const LazyLoadingBar = import('../..\\components\\LoadingBar.vue' /* webpackChunkName: "components_LoadingBar" */).then(c => c.default || c)
