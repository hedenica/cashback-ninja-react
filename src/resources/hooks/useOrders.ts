import { useQuery } from 'react-query'

import { api } from 'resources'

export function useOrders () {
  return useQuery(
    'orders',
    () => api.get('/orders').then(({ data }) => data),
  )
}
