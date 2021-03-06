import { Deck } from 'carddeck'

it('creates a deck of 52 cards', () => {
  const { cards } = Deck.create()
  expect(cards).toHaveLength(52)
})

it('creates a deck containing unique cards', () => {
  const { cards } = Deck.create()

  const appearanceCount = cards.map(
    card =>
      cards.filter(c => c.rank === card.rank && c.suit === card.suit).length
  )

  expect(appearanceCount.every(l => l === 1)).toBe(true)
})
