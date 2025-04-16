import { startCountdown } from "./utils/countdown"
import { COUNTDOWN_TARGET } from "./config"

const app = document.getElementById("app")

if (app) {
  const countdownEl = document.createElement("div")
  countdownEl.id = "countdown"
  countdownEl.textContent = "Loading timer..."
  app.appendChild(countdownEl)

  const targetDate = new Date(COUNTDOWN_TARGET)
  startCountdown(targetDate, countdownEl, () => {
    console.log("Countdown finished!")
  })
}
