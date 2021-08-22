import { ReactNode } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { QueryClient, QueryClientProvider } from 'react-query';

import { useOrders } from './useOrders';

interface WrapperProps {
  children: ReactNode;
}
const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return ({ children }: WrapperProps) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('UseOrders Hook', () => {
  it('should get orders', async () => {
    const { result, waitFor } = renderHook(() => useOrders(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toBeDefined();
  });
});
