import engine from './core/engine'

// =============================== IMPORT PAGES ================================
import './react'
import common from './pages/common'
import home from './pages/home'
import produto from './pages/produto'

const pages = [home, produto]

// =============================== ICARUS ENGINE ===============================

engine(pages, common)
