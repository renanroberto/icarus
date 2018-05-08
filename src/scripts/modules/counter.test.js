import Counter from './counter'

test('Counter should count', () => {
  const count = Counter()

  expect(count()).toBe(1)
  expect(count()).toBe(2)
  expect(count()).toBe(3)
})
