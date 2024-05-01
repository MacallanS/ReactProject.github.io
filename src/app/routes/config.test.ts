import { ARTEM_ROUTE, MAGAMED_ROUTE, VALERA_ROUTE, TABLE_PAGINATION_ROUTE } from './config';

describe('Route Constants', () => {
  it('should have the correct values', () => {
    expect(ARTEM_ROUTE).toBe('artem');
    expect(MAGAMED_ROUTE).toBe('magamed');
    expect(VALERA_ROUTE).toBe('valera');
    expect(TABLE_PAGINATION_ROUTE).toBe('table_pagination');
  });
});
