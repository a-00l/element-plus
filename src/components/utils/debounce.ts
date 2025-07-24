export const debounce = (fn: () => void, delay: number) => {
  let timer: number | null
  function debounce() {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      fn()
    }, delay)
  }

  debounce.cancel = () => {
    if (timer) clearTimeout(timer)

    timer = null
  }

  return debounce
}
