import { useEffect } from 'react'

export function useFadeInOnScroll(
  selector = '[data-fade]',
  { threshold = 0.15, root = null, rootMargin = '0px', stagger = 0 } = {}
) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector)
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target

          // delay automático por ordem, se quiser
          if (stagger && !el.dataset.fadeDelay) {
            const idx = Array.from(elements).indexOf(el)
            el.style.transitionDelay = `${idx * stagger}ms`
          } else if (el.dataset.fadeDelay) {
            el.style.transitionDelay = `${el.dataset.fadeDelay}ms`
          }

          el.classList.add('fade-in')
          observer.unobserve(el)
        })
      },
      { threshold, root, rootMargin }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [selector, threshold, root, rootMargin, stagger])
}
