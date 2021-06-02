import { AxiosError } from 'axios'
import { useMutation, useQueryClient } from 'react-query'

import { api, Product } from 'resources'

type Order = {
  products: Product[],
  total: number,
}

type Mutate = (order: Order) => void

export function useCreateOrder () {
  const queryClient = useQueryClient()

  return useMutation<Order, AxiosError, unknown, Mutate>(
    (order) => api.post('/orders', order)
      .then(({ data }) => data),
    {
      mutationKey: 'orders',
      onSuccess: () => {
        queryClient.refetchQueries('orders')
      },
      onError: () => {
        alert('There was an error')
      },
      onSettled: () => {
        queryClient.invalidateQueries('orders')
      },
    }
  )
}
