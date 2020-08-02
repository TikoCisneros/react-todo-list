import React, { createRef } from 'react';
import PropTypes from 'prop-types';

import { FormInput } from './addFormStyles';

const EMPTY_TASK_VALUE = '';

const AddForm = ({ onAddTask }) => {
  const formInput = createRef();

  const onKeyPressHandler = (event) => {
    const input = formInput.current;
    if (input === null) {
      return;
    }

    const task = input.value.trim();
    if (task.length > 0 && event.key === 'Enter') {
      onAddTask(task);
      input.value = EMPTY_TASK_VALUE;
    }
  };

  return (
    <FormInput
      data-testid="form-input"
      type="input"
      ref={formInput}
      onKeyPress={onKeyPressHandler}
      placeholder="Write a task to be done!"
    />
  )
}

AddForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default AddForm;
