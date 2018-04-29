import './react'

import home from './pages/home'
import produto from './pages/produto'

const pages = [home, produto]

const body = document.querySelector('body')
pages.forEach(page => {
  if (body.classList.contains(page.name)) {
    page.init()
  }
})