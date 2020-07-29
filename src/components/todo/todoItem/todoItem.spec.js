import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoItem from './todoItem';

const onCheck = jest.fn();
const onDelete = jest.fn();

const props = {
  task: { id: 'ID', text: 'TEXT', completed: false },
  onCheck,
  onDelete,
};

describe('TodoItem component', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<TodoItem { ...props } />);
    const itemName = getByTestId('item-name');
    expect(itemName).toHaveTextContent('TEXT');
    const itemDelete = getByTestId('item-delete');
    expect(itemDelete).toHaveTextContent('X');
  });
  it('should execute delete item', () => {
    const { getByTestId } = render(<TodoItem { ...props } />);
    fireEvent.click(getByTestId('item-delete'));
    expect(onDelete).toHaveBeenCalled();
  });
  it('should check item to done', () => {
    const { getByTestId } = render(<TodoItem { ...props } />);
    fireEvent.click(getByTestId('item-check'));
    expect(onCheck).toHaveBeenCalled();
  });
});

