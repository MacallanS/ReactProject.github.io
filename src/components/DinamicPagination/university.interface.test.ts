import { IUniversity } from './university.interface';

describe('IUniversity interface', () => {
  it('should have the correct properties', () => {
    const university: IUniversity = {
      country: 'USA',
      name: 'Harvard University'
    };

    expect(university.country).toBe('USA');
    expect(university.name).toBe('Harvard University');
  });
});
