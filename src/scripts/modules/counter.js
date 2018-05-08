export default function Counter() {
  let i = 1

  return function () {
    return i++
  }
}
