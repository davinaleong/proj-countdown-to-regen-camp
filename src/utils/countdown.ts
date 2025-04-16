export function startCountdown(
  targetDate: Date,
  element: HTMLElement,
  onComplete?: () => void
) {
  const update = () => {
    const now = new Date()
    const diff = targetDate.getTime() - now.getTime()

    if (diff <= 0) {
      element.textContent = "Time's up!"
      clearInterval(timer)
      onComplete?.()
      return
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)

    element.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`
  }

  update() // run once immediately
  const timer = setInterval(update, 1000)
}
