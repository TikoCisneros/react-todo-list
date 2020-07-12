import styled from "styled-components";

const TodoContainer = styled.div`
  background-color: white;
  margin: auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #efefef;
  box-shadow:
    /* The top layer shadow */ 0 1px 1px rgba(0, 0, 0, 0.15),
    /* The second layer */ 0 10px 0 -5px #eee,
    /* The second layer shadow */ 0 10px 1px -4px rgba(0, 0, 0, 0.15),
    /* The third layer */ 0 20px 0 -10px #eee,
    /* The third layer shadow */ 0 20px 1px -9px rgba(0, 0, 0, 0.15);
  padding: 0px 30px 30px;
  margin-bottom: 2rem;
`;

const TodoTitle = styled.header`
  text-align: center;
  font-size: 4rem;
  font-style: italic;
  margin: 40px 0;
  color: #2979FF;
`;

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 94%;
  padding: 16px;
  border: none;
  margin-bottom: 20px;
  box-shadow: 0 4px 2px -2px  #cecece;
`;

export { TodoContainer, TodoTitle, ActionsContainer };
