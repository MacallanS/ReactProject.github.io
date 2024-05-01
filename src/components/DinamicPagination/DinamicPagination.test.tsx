import { render, screen, waitFor } from '@testing-library/react';
import DynamicPagination from './index.tsx';
import 'intersection-observer';

describe('DynamicPagination component', () => {
  it('renders loading text initially', () => {
    render(<DynamicPagination />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('fetches universities data and renders cards', async () => {
    render(<DynamicPagination />);
    await waitFor(() => expect(screen.getByText('List Universities')).toBeInTheDocument());
    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument()); // Changed to queryByText
    expect(screen.getByText('Loading more...')).toBeInTheDocument();
  });
});
