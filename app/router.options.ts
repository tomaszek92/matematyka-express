import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return window.scrollTo({
        top: document.querySelector(to.hash).offsetTop - 104,
        behavior: 'smooth',
      })
    }
    return window.scrollTo({ top: 0, behavior: 'smooth' })
  },
}
