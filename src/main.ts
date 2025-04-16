// src/config.ts

import { startCountdown } from "./utils/countdown"
import {
  COUNTDOWN_ELEMENT_ID,
  COUNTDOWN_TIMER_INITIAL_MESSAGE,
  COUNTDOWN_TARGET,
} from "./config"

const app = document.getElementById("app")

if (app) {
  const countdownEl = document.createElement("div")
  countdownEl.id = COUNTDOWN_ELEMENT_ID
  countdownEl.textContent = COUNTDOWN_TIMER_INITIAL_MESSAGE
  app.appendChild(countdownEl)

  const targetDate = new Date(COUNTDOWN_TARGET)
  startCountdown(targetDate, countdownEl, () => {
    console.log("Countdown finished!")
  })
}
