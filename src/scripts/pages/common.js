import Icarus from 'icarus'

class Common extends Icarus {
  ready() {
    console.log('[ICARUS] Este script roda em todas as páginas')
  }
}

export default new Common()
