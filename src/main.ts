import { startCountdown } from "./utils/countdown"

const app = document.getElementById("app")

if (app) {
  const countdownEl = document.createElement("div")
  countdownEl.id = "countdown"
  countdownEl.textContent = "Loading timer..."
  app.appendChild(countdownEl)

  const targetDate = new Date("2025-05-01T20:30:00")
  startCountdown(targetDate, countdownEl, () => {
    console.log("Countdown finished!")
  })
}
