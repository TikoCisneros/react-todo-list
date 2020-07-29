import React from "react";
import PropTypes from "prop-types";

import {
  ItemContainer,
  ItemCheck,
  ItemName,
  ItemDelete,
} from "./todoItemStyles";

const TodoItem = (props) => {
  const {
    task: { id, text, completed },
    onCheck,
    onDelete,
  } = props;

  const onCheckHandler = () => onCheck(id);
  const onDeleteHandler = () => onDelete(id);

  return (
    <ItemContainer>
      <ItemCheck
        data-testid="item-check"
        type="checkbox"
        checked={completed}
        onChange={onCheckHandler}
      />
      <ItemName data-testid="item-name" completed={completed}>{text}</ItemName>
      <ItemDelete data-testid="item-delete" className="erase" onClick={onDeleteHandler}>
        X
      </ItemDelete>
    </ItemContainer>
  );
};

TodoItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onCheck: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoItem;
