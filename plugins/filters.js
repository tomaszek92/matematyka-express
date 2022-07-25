import Vue from 'vue'

Vue.filter('telephone', (value) => {
  const prefix = value.slice(0, 3)
  const part1 = value.slice(3, 6)
  const part2 = value.slice(6, 9)
  const part3 = value.slice(9, 12)

  return `${prefix} ${part1} ${part2} ${part3}`
})
