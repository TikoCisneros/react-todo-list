import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Options from './options';

const onSelectOption = jest.fn();
const onClearCompleted = jest.fn();

const props = {
  options: [{
    label: 'label',
    value: 'value',
  }],
  onSelectOption,
  onClearCompleted,
};

describe('Options component', () => {
  it('should select an option correctly', () => {
    const { getByTestId } = render(<Options { ...props } />);
    fireEvent.click(getByTestId('clear-button'));
    expect(onClearCompleted).toHaveBeenCalled();
  });
});

