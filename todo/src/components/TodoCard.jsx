import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  border-bottom: 1px solid #555;
`;

const TodoCard = (props) => {
  const { tasks } = props.tasks;
  console.log(tasks);
  return (
    <div>
      {tasks.map((todo) => {
        return (
          <StyledCard className="todoCard" id={todo.id}>
            <h4>{todo.item}</h4>
            <p>Completed: {JSON.stringify(todo.completed)}</p>
            <button id={todo.id} onClick={(e) => props.handleComplete(e)}>
              DONE
            </button>
            <p>{todo.date_posted}</p>
          </StyledCard>
        );
      })}
    </div>
  );
};
export default TodoCard;
