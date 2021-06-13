import { render } from '@testing-library/react'
import { Input } from './Input'

describe('Input', () => {
  it('should render properly', () => {
    const { container } = render(
      <Input
        type='text'
        placeholder='foo'
      />)

    expect(container).toMatchSnapshot()
  })
})
