import { onMounted, onUnmounted, nextTick } from 'vue'

export function useScrollReveal(selector = '.reveal-item') {
  let observer = null

  onMounted(async () => {
    await nextTick()


    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        } else {
          entry.target.classList.remove('is-visible')
        }
      })
    }, {
      threshold: 0.1, // Trigger earlier
      rootMargin: '0px 0px -20px 0px' // Slightly relaxed offset
    })

    // Observe all elements matching the selector
    const elements = document.querySelectorAll(selector)
    if (elements.length === 0) {
      console.warn('useScrollReveal: No elements found for selector', selector)
    }
    elements.forEach((el) => observer.observe(el))
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })
}
