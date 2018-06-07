const engine = (pages, common) => {
  const body = document.querySelector('body')

  pages.forEach((page) => {
    if (body.classList.contains(page.name)) {
      common.init()
      page.init()
    }
  })
}

export default engine
