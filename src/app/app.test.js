import { render, screen } from '@testing-library/react';
import Dashboard from './dashboard/page';
import Home from './page';

test('Check the Dashboard page', () => {
  // Arrange
  render(<Dashboard />);
  expect(screen.getByText('Dashboard')).toBeInTheDocument();
});

test('Check the Home page', () => {
  // Arrange
  render(<Home />);
  //   expect(screen.getByText('Venkat')).toBeInTheDocument();
});
