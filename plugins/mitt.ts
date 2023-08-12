import mitt from 'mitt'

type Events = {
  'on-link-click': void
}

export default defineNuxtPlugin((nuxtApp) => {
  const emitter = mitt<Events>()

  nuxtApp.provide('bus', {
    emit: emitter.emit,
    on: emitter.on,
  })
})
