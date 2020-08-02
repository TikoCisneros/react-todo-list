import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import AddForm from './addForm';

const onAddTask = jest.fn();

const props = {
  onAddTask,
};

describe('AddForm component', () => {
  it('should write correctly', async () => {
    const { getByTestId } = render(<AddForm { ...props } />);
    const inputNode = getByTestId('form-input');
    userEvent.type(inputNode, 'task');
    expect(inputNode.value).toBe('task');
    expect(onAddTask).toHaveBeenCalledTimes(0);
  });
});

