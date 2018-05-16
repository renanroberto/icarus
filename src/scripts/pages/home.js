
import Icarus from 'icarus'

class Home extends Icarus {
  constructor() {
    super('home')
  }

  ready() {
    console.log('[ICARUS] Você está na home!')
  }
}

export default new Home()
