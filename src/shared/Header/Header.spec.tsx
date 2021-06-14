import { QueryClient, QueryClientProvider } from 'react-query'
import { render } from '@testing-library/react'

import { Header } from './Header'

const queryClient = new QueryClient()

describe('Header', () => {
  it('should render properly', () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Header />
      </QueryClientProvider>,
    )

    expect(container).toMatchSnapshot()
  })
})
