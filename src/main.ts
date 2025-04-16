const countdownEl = document.getElementById("countdown") as HTMLElement

// 🎯 Set your target date here
const targetDate = new Date("2025-08-12T17:00:00")

function updateCountdown() {
  const now = new Date()
  const diff = targetDate.getTime() - now.getTime()

  if (diff <= 0) {
    countdownEl.textContent = "Time's up!"
    clearInterval(timer)
    return
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`
}

// 🔁 Update every second
updateCountdown()
const timer = setInterval(updateCountdown, 1000)
