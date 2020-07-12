import styled from "styled-components";

const FormInput = styled.input`
  margin: 0 1rem 20px;
  font-size: 20px;
  line-height: 1.4em;
  color: #2979FF;
  padding: 8px 6px;
  border: none;
  box-shadow: 0 2px 1px -2px #757575;
  ::placeholder {
    color: #cdcdcd;
    font-style: italic;
    font-size: 20px;
  }
  :focus {
    outline: 0;
  }
`;

export { FormInput };
