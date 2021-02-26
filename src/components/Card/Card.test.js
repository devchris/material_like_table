import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders children in card', () => {
  const component = (
    <Card>
      <div>My Content</div>
    </Card>
  );
  render(component);
  const linkElement = screen.getByText(/My Content/i);
  expect(linkElement).toBeInTheDocument();
});
