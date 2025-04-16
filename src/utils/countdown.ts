import {
  COUNTDOWN_COMPLETION_MESSAGE,
  COUNTDOWN_FLASH_THRESHOLD_MS,
} from "../config/constants"

export type CountdownElements = {
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
  const { daysEl, hoursEl, minutesEl, secondsEl } = elements

  const unitEls = {
    days: document.getElementById("days-unit")!,
    hours: document.getElementById("hours-unit")!,
    minutes: document.getElementById("minutes-unit")!,
    seconds: document.getElementById("seconds-unit")!,
  }

  const update = () => {
    const now = new Date()
    const diff = targetDate.getTime() - now.getTime()

    if (diff <= 0) {
      daysEl.textContent = COUNTDOWN_COMPLETION_MESSAGE
      daysEl.classList.add("flash")

      hoursEl.textContent = ""
      minutesEl.textContent = ""
      secondsEl.textContent = ""

      unitEls.days.textContent = ""
      unitEls.hours.textContent = ""
      unitEls.minutes.textContent = ""
      unitEls.seconds.textContent = ""

      clearInterval(timer)
      onComplete?.()
      return
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)

    daysEl.textContent = String(days).padStart(2, "0")
    hoursEl.textContent = String(hours).padStart(2, "0")
    minutesEl.textContent = String(minutes).padStart(2, "0")
    secondsEl.textContent = String(seconds).padStart(2, "0")

    // Flash when countdown is within threshold
    const shouldFlash = diff <= COUNTDOWN_FLASH_THRESHOLD_MS

    ;[daysEl, hoursEl, minutesEl, secondsEl].forEach((el) =>
      el.classList.toggle("flash", shouldFlash)
    )

    ;[unitEls.days, unitEls.hours, unitEls.minutes, unitEls.seconds].forEach(
      (el) => el.classList.toggle("flash", shouldFlash)
    )
  }

  update()
  const timer = setInterval(update, 1000)
}
