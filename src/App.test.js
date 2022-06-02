import { render, screen } from '@testing-library/react';
import App from './App';

test('render title', () => {
  render(<App />);
  const title = screen.getByText(/Spacious/i);
  expect(title).toBeInTheDocument();
});
