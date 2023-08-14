import { render, screen } from '@testing-library/react';
import Example from './App';

test('renders learn react link', () => {
  render(<Example />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
