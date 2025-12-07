export const initializeScripts = () => {
  // This function will be called when the component mounts
  // It initializes any vendor scripts that need to run after the DOM is ready
  
  if (typeof window === 'undefined') return

  // First, make all opacity-0 elements visible immediately (fallback)
  const makeElementsVisible = () => {
    const elements = document.querySelectorAll('.opacity-0[data-ns-animate]')
    elements.forEach((elem: Element) => {
      const htmlElem = elem as HTMLElement
      // Remove opacity-0 class so content is visible
      htmlElem.classList.remove('opacity-0')
      // Set opacity via style as backup
      if (htmlElem.style.opacity === '' || htmlElem.style.opacity === '0') {
        htmlElem.style.opacity = '1'
      }
    })
  }

  // Run immediately to make content visible
  makeElementsVisible()
  
  // Also run after a short delay to catch any elements that render later
  setTimeout(makeElementsVisible, 100)
  setTimeout(makeElementsVisible, 500)

  // Initialize reveal animations - try to use main.js function
  const initMainJSAnimations = () => {
    // The main.js script should have initialized, but if not, make elements visible
    makeElementsVisible()
    
    // Try to call the reveal function from main.js if it exists
    if (typeof window.initRevealElements === 'function') {
      try {
        window.initRevealElements()
      } catch (e) {
        console.warn('Error calling initRevealElements:', e)
        makeElementsVisible()
      }
    } else {
      // If main.js hasn't loaded yet, wait a bit more
      setTimeout(() => {
        if (typeof window.initRevealElements === 'function') {
          window.initRevealElements()
        } else {
          makeElementsVisible()
        }
      }, 1000)
    }
  }

  // Initialize after scripts load
  setTimeout(initMainJSAnimations, 300)
  setTimeout(initMainJSAnimations, 1000)

  // Initialize header offset calculation
  const computeHeaderOffset = () => {
    const header = document.querySelector('header')
    if (!header) return 0
    const rect = header.getBoundingClientRect()
    const topVal = parseFloat(getComputedStyle(header).top) || 0
    const pos = getComputedStyle(header).position
    return (pos === 'fixed' || pos === 'sticky') ? Math.ceil(rect.height + topVal) : 0
  }

  const applyHeaderVar = () => {
    const offset = computeHeaderOffset()
    document.documentElement.style.setProperty('--header-offset', (offset + 12) + 'px')
  }

  // Run on load and resize
  window.addEventListener('load', applyHeaderVar)
  window.addEventListener('resize', () => {
    if (window._hHeaderTimeout) {
      clearTimeout(window._hHeaderTimeout)
    }
    window._hHeaderTimeout = setTimeout(applyHeaderVar, 120)
  })

  // Observe header changes
  const header = document.querySelector('header')
  if (header && window.MutationObserver) {
    const mo = new MutationObserver(applyHeaderVar)
    mo.observe(header, { attributes: true, childList: true, subtree: true })
  }

  applyHeaderVar()

  // Smooth scroll handling for anchor links
  const handleAnchorClick = (e: MouseEvent) => {
    const target = (e.target as HTMLElement).closest('a[href^="#"]')
    if (!target) return
    
    const href = target.getAttribute('href') || ''
    if (href === '#' || href === '') return

    const id = href.slice(1)
    if (!id) return
    
    const targetElement = document.getElementById(id)
    if (targetElement) {
      e.preventDefault()
      const headerOffset = computeHeaderOffset() + 12
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })

      // Update hash
      if (history.pushState) {
        history.pushState(null, '', '#' + id)
      } else {
        location.hash = id
      }
    }
  }

  document.addEventListener('click', handleAnchorClick)

  // Scroll mitigation for performance
  let scrollTimer: ReturnType<typeof setTimeout> | null = null
  const SCROLL_PAUSE_MS = 180

  const onScrollStart = () => {
    document.documentElement.classList.add('is-scrolling')
  }

  const onScrollStop = () => {
    document.documentElement.classList.remove('is-scrolling')
  }

  window.addEventListener('scroll', () => {
    onScrollStart()
    if (scrollTimer) clearTimeout(scrollTimer)
    scrollTimer = setTimeout(onScrollStop, SCROLL_PAUSE_MS)
  }, { passive: true })

  // Cleanup function (optional, for when component unmounts)
  return () => {
    document.removeEventListener('click', handleAnchorClick)
    window.removeEventListener('scroll', onScrollStart)
  }
}

