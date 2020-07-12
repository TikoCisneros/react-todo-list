import React from 'react';
import PropTypes from 'prop-types';

import AddForm from './addForm';
import Options from './options';
import TodoItem from './todoItem';

import { TodoContainer, TodoTitle, ActionsContainer } from './todoStyles';

const Todo = (props) => {
  const {
    tasksData,
    filterOptions,
    onAddTask,
    onSelectOption,
    onClearCompleted,
    onCheckTask,
    onDeleteTask,
  } = props;
  return (
    <React.Fragment>
      <TodoTitle>Simple Todo</TodoTitle>
      <TodoContainer>
        <ActionsContainer>
          <AddForm onAddTask={onAddTask} />
          <Options
            options={filterOptions}
            onSelectOption={onSelectOption}
            onClearCompleted={onClearCompleted}
          />
        </ActionsContainer>
        {tasksData.map((item) => (
          <TodoItem
            key={item.id}
            task={item}
            onCheck={onCheckTask}
            onDelete={onDeleteTask}
          />
        ))}
      </TodoContainer>
    </React.Fragment>
  )
}

Todo.propTypes = {
  tasksData: PropTypes.array.isRequired,
  filterOptions: PropTypes.array.isRequired,
  onAddTask: PropTypes.func.isRequired,
  onSelectOption: PropTypes.func.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  onCheckTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
}

export default Todo;
