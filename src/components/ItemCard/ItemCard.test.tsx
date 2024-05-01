import { render, screen } from '@testing-library/react';
import CardUniversity from './index.tsx';

const mockUniversityData: IUniversity = {
  name: 'Test University',
  country: 'Test Country',
};

describe('CardUniversity component', () => {
  it('renders university name and country', () => {
    render(<CardUniversity data={mockUniversityData} />);
    const nameElement = screen.getByText('Test University');
    const countryElement = screen.getByText('Test Country');
    expect(nameElement).toBeInTheDocument();
    expect(countryElement).toBeInTheDocument();
  });
});
