import { render, screen } from '@testing-library/react';
import App from './App';

test("render Stock Parser App Title", () => {
  render(<App />);
  const appTitle = screen.getByText(/Stock Parser App/i);
  expect(appTitle).toBeInTheDocument();
});


test("render of the Go to Page Link", () => {
  render(<App />);
  const linkElement = screen.getByText('Go to Page');
  expect(linkElement).toHaveAttribute('href', '/page');

});