// =============================== IMPORT REACT ================================
import './react'

// =============================== IMPORT PAGES ================================
import home from './pages/home'
import produto from './pages/produto'

const pages = [home, produto]

// =============================== ICARUS ENGINE ===============================
const body = document.querySelector('body')
pages.forEach(page => {
  if (body.classList.contains(page.name)) {
    page.init()
  }
})

console.log('ICARUS STARTED')
