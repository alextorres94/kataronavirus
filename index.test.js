const App = require('./index')

beforeEach(() => {
  Coronavirus = App()
})

it('should see the init score', () => {
  const score = Coronavirus.getScore()

  expect(score).toBe('000:000')
})

it('should kill a person', () => {
  const person = 1

  Coronavirus.kill(person)
  const score = Coronavirus.getScore()

  expect(score).toBe('001:000')
})

it('should kill a couple', () => {
  const couple = 2

  Coronavirus.kill(couple)
  const score = Coronavirus.getScore()

  expect(score).toBe('002:000')
})

it('should kill a family', () => {
  const family = 10

  Coronavirus.kill(family)
  const score = Coronavirus.getScore()

  expect(score).toBe('010:000')
})

it('should survive a person', () => {
  const person = 1

  Coronavirus.survive(person)
  const score = Coronavirus.getScore()

  expect(score).toBe('000:001')
})

it('should survive a couple', () => {
  const couple = 2

  Coronavirus.survive(couple)
  const score = Coronavirus.getScore()

  expect(score).toBe('000:002')
})

it('should survive a family', () => {
  const family = 10

  Coronavirus.survive(family)
  const score = Coronavirus.getScore()

  expect(score).toBe('000:010')
})

it('should kill and survive a person', () => {
  const person = 1

  Coronavirus.kill(person)
  Coronavirus.survive(person)
  const score = Coronavirus.getScore()

  expect(score).toBe('001:001')
})

it('should kill and survive a couple', () => {
  const couple = 2

  Coronavirus.kill(couple)
  Coronavirus.survive(couple)
  const score = Coronavirus.getScore()

  expect(score).toBe('002:002')
})

it('should kill and survive a family', () => {
  const family = 10

  Coronavirus.kill(family)
  Coronavirus.survive(family)
  const score = Coronavirus.getScore()

  expect(score).toBe('010:010')
})
