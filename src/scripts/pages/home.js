
import Page from './page'

class Home extends Page {
  constructor() {
    super('home')
  }

  ready() {
    console.log('Você está na home!')
  }
}

export default new Home()
