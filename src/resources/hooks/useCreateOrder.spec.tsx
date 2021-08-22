import { ReactNode } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { QueryClient, QueryClientProvider } from 'react-query';

import { useCreateOrder } from './useCreateOrder';

interface WrapperProps {
  children: ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

const createWrapper = () => {
  return ({ children }: WrapperProps) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const newOrder = {
  products: [
    {
      name: 'Livro de Testes',
      price: 223.5,
    },
  ],
  total: 223.5,
};

const useNewOrder = () => {
  const { mutate, data } = useCreateOrder();
  // const { data } = useOrders()

  return {
    data,
    mutate,
  };
};

describe('useCreateOrder Hook', () => {
  it('should create a order', async () => {
    const { result } = renderHook(() => useNewOrder(), {
      wrapper: createWrapper(),
    });

    act(() => {
      result.current.mutate(newOrder);
    });

    expect(result.current.data).toBe('');

    // await waitFor(() => {
    //   const data = result.current
    //   const lastItem = data[data.length - 1]

    //   return Promise.resolve(
    //     expect(lastItem).toEqual({ id: lastItem.id, products: newOrder.products, total: newOrder.total }),
    //   )
    // })
  });
});
