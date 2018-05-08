export default class Icarus {
  constructor(name) {
    this.name = name
  }

  ready() {}
  common() {}
  ajaxStop() {}

  init() {
    // Sorry, ES Lord

    $(document).ready(() => {
      this.common()
      this.ready()
    })

    $(document).ajaxStop(() => {
      this.common()
      this.ajaxStop()
    })
  }
}
