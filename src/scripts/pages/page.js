export default class Page {
  constructor(name) {
    this.name = name
  }

  ready() {}
  common() {}
  ajaxStop() {}

  init() {
    // Me desculpe oh senhor do Ecmascript

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
