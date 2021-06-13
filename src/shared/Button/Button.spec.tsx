import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Button } from '../Button'

describe('Button', () => {
  it('should render properly', () => {
    const { container } = render(
      <Button size='small' color='yellow'>
        Button Component
      </Button>,
    )

    expect(container).toMatchSnapshot()
  })

  it('should render in yellow', () => {
    render(
      <Button size='small' color='yellow'>
        Button Component
      </Button>,
    )

    expect(screen.getByRole('button')).toHaveClass('--yellow')
  })

  it('should render in smalls size', () => {
    render(
      <Button size='small' color='yellow'>
        Button Component
      </Button>,
    )

    expect(screen.getByRole('button')).toHaveClass('--small')
  })
})
