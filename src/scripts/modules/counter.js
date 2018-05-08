function Counter() {
  let i = 1

  return function () {
    return i++
  }
}

export default Counter
