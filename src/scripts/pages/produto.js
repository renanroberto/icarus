
import Icarus from '../core/icarus'

class Produto extends Icarus {
  constructor() {
    super('produto')
  }

  ready() {
    console.log('Você está na página de produtos!')
  }
}

export default new Produto()
