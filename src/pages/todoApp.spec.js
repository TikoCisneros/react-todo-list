
import React from 'react';
import TodoApp from './todoApp';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  const { container } = render(<TodoApp />);
  expect(container).toMatchSnapshot();
});
