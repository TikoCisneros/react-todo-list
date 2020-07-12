import styled from 'styled-components'

const ItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px;
  width: 80%;
  border-bottom: 1px solid #cecece;
  font-weight: 100;
  font-size: 18px;
  :hover .erase{
    display: inline-block;
  }
`;

const ItemCheck = styled.input`
  margin-right: 10px;
  height: 18px;
  width: 18px;
  cursor: pointer;
  :focus {
    outline: 0;
  }
`;

const ItemName = styled.p`
  flex: 1;
  color: ${props => props.completed ? '#cdcdcd' : '#333333'};
  font-style: ${props => props.completed ? 'italic' : 'normal'};
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
`;

const ItemDelete = styled.button`
  background-color: #fb4f42;
  border: none;
  border-radius: 2px;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: none;
  font-size: 12px;
  cursor: pointer;
  :hover {
    background-color: #fb4f42c9;
  }
  :focus {
    outline: 0;
  }
`;

export {
  ItemContainer,
  ItemCheck,
  ItemName,
  ItemDelete,
};
