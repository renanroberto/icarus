
import Page from './page'

class Produto extends Page {
  constructor() {
    super('produto')
  }

  ready() {
    console.log('Você está na página de produtos!')
  }
}

export default new Produto()
