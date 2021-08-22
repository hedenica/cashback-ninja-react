import { renderHook } from '@testing-library/react-hooks';

import { useCashback } from './useCashback';

jest.mock('../utils/formatCurrency.ts');
jest.mock('../utils/cashback.ts');

// const MOCKED_ORDERS = [
//   {
//     id: 1,
//     products: [{
//       name: 'foo',
//       price: 123,
//     }],
//     total: 123,
//   },
//   {
//     id: 2,
//     products: [{
//       name: 'bar',
//       price: 321,
//     }],
//     total: 321,
//   },
// ]

describe('useCashback', () => {
  it('should return a cashback', async () => {
    const { result } = renderHook(() => useCashback([]));

    // await act(async () => {
    //   await result.current.handleCashbackTotal()
    // })

    expect(result.current.cashbackTotal).toBe(123);
  });
});
