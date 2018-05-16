import Icarus from '../core/icarus'

class Common extends Icarus {
  ready() {
    console.log('[ICARUS] Este script roda em todas as páginas')
  }
}

export default new Common()
