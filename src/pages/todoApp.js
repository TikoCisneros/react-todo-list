import React, { Component } from 'react';
import { v4 as uuidV4 } from 'uuid';

import ToDo from '../components/todo';

import todoData from '../res/data';

const FILTER_OPTIONS = Object.freeze({
  COMPLETED: 'completed',
  REMAINED: 'remained',
});

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: todoData,
      options: [
        { value: FILTER_OPTIONS.REMAINED, label: 'Remained tasks' },
        { value: FILTER_OPTIONS.COMPLETED, label: 'Completed tasks' },
      ],
      filter: null,
    };
  }

  onAddTaskHandler = (task) => {
    this.setState((prevState) => {
      const tasks = [...prevState.tasks];
      tasks.push({
        id: uuidV4(),
        text: task,
        completed: false,
      });

      return { tasks };
    });
  };

  onCheckTaskHandler = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  onDeleteTaskHandler = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  };

  onSelectOptionHandler = (option) => {
    const filter = option === null ? option : option.value;
    this.setState({ filter });
  };

  onClearCompletedHandler = () => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => !task.completed),
    }));
  }

  render() {
    const { tasks, filter, options } = this.state;

    const tasksList = filter
      ? tasks.filter(
          (item) => item.completed === (filter === FILTER_OPTIONS.COMPLETED)
        )
      : tasks;

    return (
      <ToDo
        tasksData={tasksList}
        filterOptions={options}
        onAddTask={this.onAddTaskHandler}
        onSelectOption={this.onSelectOptionHandler}
        onClearCompleted={this.onClearCompletedHandler}
        onCheckTask={this.onCheckTaskHandler}
        onDeleteTask={this.onDeleteTaskHandler}
      />
    );
  }
}

export default TodoApp;
