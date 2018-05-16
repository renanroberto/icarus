// =============================== IMPORT REACT ================================
import './react'

// =============================== IMPORT PAGES ================================
import common from './pages/common'
import home from './pages/home'
import produto from './pages/produto'

const pages = [home, produto]

// =============================== ICARUS ENGINE ===============================
const body = document.querySelector('body')
pages.forEach((page) => {
  if (body.classList.contains(page.name)) {
    common.init()
    page.init()
  }
})

console.log('ICARUS STARTED')
