import { useEffect } from 'react'

export function useSceneMotion(scene, count) {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduced.matches) return
    const nodes = document.querySelectorAll('.paper-section, .book-card, .large-collection, .rail-card, .welcome-card, .illustrated-quote, .mood-card, .recommendation-section, .studio-panel, .studio-metric')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-revealed')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.06, rootMargin: '0px 0px -12px 0px' })
    nodes.forEach((node, index) => {
      if (node.classList.contains('is-revealed')) return
      node.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 45}ms`)
      node.classList.add('scene-reveal')
      observer.observe(node)
    })
    return () => {
      observer.disconnect()
      nodes.forEach(node => node.classList.remove('scene-reveal'))
    }
  }, [scene, count])
}
