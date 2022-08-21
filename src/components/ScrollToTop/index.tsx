import './style.css'

export const ScrollToTop = () => {
  const calcScrollValue = () => {
    const scrollProgress = document.getElementById('progress')
    const pos = document.documentElement.scrollTop

    const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

    const scrollValue = Math.round((pos * 100) / calcHeight)

    if (pos > 100) {
      scrollProgress!.style.display = 'grid'
    } else {
      scrollProgress!.style.display = 'none'
    }
    scrollProgress!.style.background = `conic-gradient(var(--primary) ${scrollValue}%, #d7d7d7 ${scrollValue}%)`
  }

  const scrollToTopHandler = () => {
    document.documentElement.scrollTop = 0
  }

  window.onscroll = calcScrollValue
  window.onload = calcScrollValue

  return (
    <div id='progress' onClick={scrollToTopHandler}>
      <span id='progress-value'>&#x1F815;</span>
    </div>
  )
}
