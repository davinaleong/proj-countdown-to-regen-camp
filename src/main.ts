import {
  COUNTDOWN_TARGET,
  COUNTDOWN_FINISHED_LOG_MESSAGE,
  COUNTDOWN_COMPLETION_MESSAGE,
} from "./config/constants"
import { startCountdown } from "./utils/countdown"
import "./style.css"

// Mount target
const app = document.getElementById("app")

if (app) {
  app.innerHTML = `
    <div class="wrapper | ff-montserrat text-center text-white bg-black dark:text-black dark:bg-white h-screen flex flex-col items-center justify-center p-4">
      <header class="wrapper__header">
        <h1 class="wrapper__header__h1 | text-4xl font-semibold">RE:GEN CAMP 2025</h1>
      </header>

      <main class="wrapper__countdown | flex items-end justify-center mt-4">
        <div id="days" class="wrapper__countdown__digits | text-5xl font-bold">00</div>
        <div class="wrapper__countdown__unit | text-2xl font-semibold">d</div>
        <div id="hours" class="wrapper__countdown__digits | text-5xl font-bold">00</div>
        <div class="wrapper__countdown__unit | text-2xl font-semibold">h</div>
        <div id="minutes" class="wrapper__countdown__digits | text-5xl font-bold">00</div>
        <div class="wrapper__countdown__unit | text-2xl font-semibold">m</div>
        <div id="seconds" class="wrapper__countdown__digits | text-5xl font-bold">00</div>
        <div class="wrapper__countdown__unit | text-2xl font-semibold">s</div>
      </main>

      <footer class="wrapper__footer | mt-4">
        <p class="wrapper__footer__p | text-sm italic">&copy; Davina Leong 2025</p>
      </footer>
    </div>
  `

  const daysEl = document.getElementById("days")!
  const hoursEl = document.getElementById("hours")!
  const minutesEl = document.getElementById("minutes")!
  const secondsEl = document.getElementById("seconds")!

  startCountdown(
    COUNTDOWN_TARGET,
    { daysEl, hoursEl, minutesEl, secondsEl },
    () => {
      daysEl.textContent = COUNTDOWN_COMPLETION_MESSAGE
      hoursEl.textContent = ""
      minutesEl.textContent = ""
      secondsEl.textContent = ""
      console.log(COUNTDOWN_FINISHED_LOG_MESSAGE)
    }
  )
}
