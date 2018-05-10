import Counter from './counter'

describe('Counter', () => {
  test('should count', () => {
    const count = Counter()

    expect.assertions(4)

    expect(typeof count).toBe('function')

    expect(count()).toBe(1)
    expect(count()).toBe(2)
    expect(count()).toBe(3)
  })
})
