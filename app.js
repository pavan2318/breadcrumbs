const wikiRoot = document.getElementById("wiki-root")
const breadcrumbsEl = document.getElementById("breadcrumbs")
const movesEl = document.getElementById("moves")
const timerEl = document.getElementById("timer")
const targetEl = document.getElementById("target-name")
const progressFill = document.getElementById("progress-fill")
const toggle = document.getElementById("theme-toggle")

/* GAME CONFIG */
const START_PAGE = "India"
const TARGET_PAGE = "Asia"

let breadcrumbs = []
let moves = 0
let startTime = Date.now()
let hasWon = false
let timerRunning = true

targetEl.textContent = TARGET_PAGE

loadPage(START_PAGE)

/* ---------- CORE ---------- */

function loadPage(title) {
  fetch(`https://en.wikipedia.org/api/rest_v1/page/html/${encodeURIComponent(title)}`)
    .then(r => r.text())
    .then(html => {
      wikiRoot.innerHTML = html
      interceptLinks()
      addBreadcrumb(title)
      checkWinFromCanonical()
      animateBoard()
    })
}

/* ---------- LINK CONTROL ---------- */

function interceptLinks() {
  wikiRoot.querySelectorAll("a").forEach(a => {
    const href = a.getAttribute("href")
    if (!href) return

    const blocked =
      href.includes("Wikipedia") ||
      href.includes("Help") ||
      href.includes("Special") ||
      href.includes("Talk") ||
      href.includes("File")

    if (href.startsWith("./") && !blocked && !hasWon) {
      a.onclick = e => {
        e.preventDefault()
        const next = href.replace("./", "").split("#")[0]
        moves++
        movesEl.textContent = `${moves} moves`
        updateProgress()
        feedback()
        loadPage(next)
      }
    } else {
      a.onclick = e => e.preventDefault()
      a.style.pointerEvents = "none"
      a.style.opacity = "0.35"
    }
  })
}

/* ---------- GAME FEEL ---------- */

function feedback() {
  if (navigator.vibrate) navigator.vibrate(10)
}

function animateBoard() {
  wikiRoot.animate(
    [{ opacity: 0.6 }, { opacity: 1 }],
    { duration: 150 }
  )
}

function updateProgress() {
  const pct = Math.min((moves / 6) * 100, 100)
  progressFill.style.width = pct + "%"
}

/* ---------- STATE ---------- */

function addBreadcrumb(title) {
  breadcrumbs.push(title)
  breadcrumbsEl.textContent = breadcrumbs.join("  →  ")
}

function checkWinFromCanonical() {
  const canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical || hasWon) return

  const page =
    decodeURIComponent(canonical.href.split("/wiki/")[1] || "")
      .replace(/_/g, " ")
      .toLowerCase()

  if (page === TARGET_PAGE.toLowerCase()) {
    hasWon = true
    timerRunning = false
    showWin()
  }
}

function showWin() {
  const overlay = document.createElement("div")
  overlay.id = "win-overlay"
  overlay.innerHTML = `
    <div class="win-card">
      <h2>🎉 Mission complete</h2>
      <p>You reached <strong>${TARGET_PAGE}</strong></p>
      <p>${moves} moves · ${Math.floor((Date.now() - startTime) / 1000)}s</p>
      <button onclick="location.reload()">Play again</button>
    </div>
  `
  document.body.appendChild(overlay)
}

/* ---------- TIMER ---------- */

setInterval(() => {
  if (!timerRunning) return
  timerEl.textContent =
    `${Math.floor((Date.now() - startTime) / 1000)}s`
}, 1000)

/* ---------- THEME ---------- */

toggle.onclick = () => {
  document.body.classList.toggle("dark")
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  )
}

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark")
}
