import {
  COUNTDOWN_TARGET,
  COUNTDOWN_FINISHED_LOG_MESSAGE,
  COUNTDOWN_COMPLETION_MESSAGE,
  COUNTDOWN_TIMER_HEADING,
} from "./config/constants"
import { startCountdown } from "./utils/countdown"
import "./style.css"

const app = document.getElementById("app")

if (app) {
  // ⏳ Wrapper
  const wrapper = document.createElement("div")
  wrapper.className =
    "wrapper | ff-montserrat text-center text-white bg-black dark:text-black dark:bg-white h-screen flex flex-col items-center justify-center p-4"

  // 🧢 Header
  const header = document.createElement("header")
  header.className = "wrapper__header"

  const title = document.createElement("h1")
  title.className = "wrapper__header__h1 | text-4xl font-semibold"
  title.textContent = COUNTDOWN_TIMER_HEADING

  header.appendChild(title)

  // ⏱️ Countdown Main
  const main = document.createElement("main")
  main.className = "wrapper__countdown | flex items-end justify-center mt-4"

  const createDigitBlock = (id: string, label: string) => {
    const fragment = document.createDocumentFragment()

    const digit = document.createElement("div")
    digit.id = id
    digit.className = "wrapper__countdown__digits | text-5xl font-bold"
    digit.textContent = "00"

    const unit = document.createElement("div")
    unit.className = "wrapper__countdown__unit | text-2xl font-semibold"
    unit.textContent = label

    fragment.appendChild(digit)
    fragment.appendChild(unit)

    return fragment
  }

  main.appendChild(createDigitBlock("days", "d"))
  main.appendChild(createDigitBlock("hours", "h"))
  main.appendChild(createDigitBlock("minutes", "m"))
  main.appendChild(createDigitBlock("seconds", "s"))

  // 🦶 Footer
  const footer = document.createElement("footer")
  footer.className = "wrapper__footer | mt-4"

  const footerP = document.createElement("p")
  footerP.className = "wrapper__footer__p | text-sm italic"
  footerP.textContent = "© Davina Leong 2025"

  footer.appendChild(footerP)

  // 🧱 Assemble everything
  wrapper.appendChild(header)
  wrapper.appendChild(main)
  wrapper.appendChild(footer)
  app.appendChild(wrapper)

  // 🔗 Get DOM refs
  const daysEl = document.getElementById("days")!
  const hoursEl = document.getElementById("hours")!
  const minutesEl = document.getElementById("minutes")!
  const secondsEl = document.getElementById("seconds")!

  // 🟢 Start countdown
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
