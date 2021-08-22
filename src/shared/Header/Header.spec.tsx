import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Header } from './Header';

const queryClient = new QueryClient();

describe('Header', () => {
  it('should render properly', () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Header />
      </QueryClientProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render XX,XX on header', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Header />
      </QueryClientProvider>,
    );

    const element = screen.getByText(/Seu saldo em cashback:/);

    expect(element).toHaveTextContent('XX,XX');
  });
});
