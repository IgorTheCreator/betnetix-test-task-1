const { inverseFactorial } = require('./inverseFactorial')

test('n exists', () => {
  expect(inverseFactorial(120)).toBe(5)
  expect(inverseFactorial(6)).toBe(3)
})

test('n does not exists', () => {
  expect(inverseFactorial(8)).toBe(-1)
  expect(inverseFactorial(1)).toBe(1)
  expect(inverseFactorial(-1)).toBe(-1)
  expect(inverseFactorial(4.5)).toBe(-1)
})

test('wrong input', () => {
  expect(() => inverseFactorial('some string')).toThrow()
  expect(() => inverseFactorial({})).toThrow()
  expect(() => inverseFactorial([])).toThrow()
  expect(() => inverseFactorial(null)).toThrow()
  expect(() => inverseFactorial(undefined)).toThrow()
  expect(() => inverseFactorial(() => {})).toThrow()
})
