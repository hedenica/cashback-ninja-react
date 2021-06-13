import { render } from '@testing-library/react'
import { Card } from './Card'

const MOCKED_ORDERS = [
  {
    id: 1,
    products: [{
      name: 'foo',
      price: 123,
    }],
    total: 123,
  },
]

describe('Card', () => {
  it('should render properly', () => {
    const { container } = render(<Card orders={MOCKED_ORDERS} />)

    expect(container).toMatchSnapshot()
  })
})
