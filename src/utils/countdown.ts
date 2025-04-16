import { COUNTDOWN_COMPLETION_MESSAGE } from "./../config/constants"

type CountdownElements = {
  daysEl: HTMLElement
  hoursEl: HTMLElement
  minutesEl: HTMLElement
  secondsEl: HTMLElement
}

export function startCountdown(
  targetDate: Date,
  elements: CountdownElements,
  onComplete?: () => void
) {
  const update = () => {
    const now = new Date()
    const diff = targetDate.getTime() - now.getTime()

    if (diff <= 0) {
      elements.daysEl.textContent = COUNTDOWN_COMPLETION_MESSAGE
      elements.hoursEl.textContent = ""
      elements.minutesEl.textContent = ""
      elements.secondsEl.textContent = ""
      clearInterval(timer)
      onComplete?.()
      return
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)

    elements.daysEl.textContent = String(days).padStart(2, "0")
    elements.hoursEl.textContent = String(hours).padStart(2, "0")
    elements.minutesEl.textContent = String(minutes).padStart(2, "0")
    elements.secondsEl.textContent = String(seconds).padStart(2, "0")
  }

  update()
  const timer = setInterval(update, 1000)
}
