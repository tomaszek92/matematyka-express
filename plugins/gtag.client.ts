export default defineNuxtPlugin(() => {
  const { gtagId } = useRuntimeConfig().public

  function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments)
  }

  window.dataLayer = window.dataLayer || []

  gtag('js', new Date())
  gtag('config', gtagId)

  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${gtagId}`,
        async: true,
      },
    ],
  })
})
