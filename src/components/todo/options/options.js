import React from "react";
import PropTypes from "prop-types";

import { OptionsContainer, OptionsButton, DropDown } from "./optionsStyles";

const Options = ({ options, onSelectOption, onClearCompleted }) => {
  return (
    <OptionsContainer>
      <DropDown
        data-testid="dropdown"
        isClearable
        options={options}
        onChange={onSelectOption}
        placeholder="Chose a filter option..."
      />
      <OptionsButton data-testid="clear-button" onClick={onClearCompleted}>Clear completed</OptionsButton>
    </OptionsContainer>
  );
};

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  onSelectOption: PropTypes.func.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
};

export default Options;
