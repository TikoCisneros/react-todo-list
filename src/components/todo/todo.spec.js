import React from 'react';
import Todo from './todo';
import renderer from 'react-test-renderer';

describe('Todo component', () => {
  it('renders correctly', () => {
    const props = {
      tasksData: [{ id: 1 }],
      filterOptions: [],
      onAddTask: jest.fn(),
      onSelectOption: jest.fn(),
      onClearCompleted: jest.fn(),
      onCheckTask: jest.fn(),
      onDeleteTask: jest.fn(),
    };
    const tree = renderer
      .create(<Todo {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
