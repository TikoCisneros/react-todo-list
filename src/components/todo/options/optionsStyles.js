import styled from 'styled-components';

import Select from 'react-select';

const OptionsContainer = styled.div`
  display: flex;
`;

const DropDown = styled(Select)`
  flex: 1;
  margin-right: 20px;
`;

const OptionsButton = styled.button`
  background-color: #2979FF;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  :focus {
    outline: 0;
  }
  :hover {
    background-color: #2979ffc9;
  }
`;

export {
  OptionsContainer,
  OptionsButton,
  DropDown,
};
