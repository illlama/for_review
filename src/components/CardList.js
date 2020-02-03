import React from 'react';
import Card from './Card';

const CardList = ({ todo }) => {
  return (
    <div>
      <ul>
        {todo.map(todo_content => {
          // eslint-disable-next-line no-unused-expressions
          return <Card key={todo_content.id} todo_content={todo_content} />;
        })}
      </ul>
    </div>
  );
};
export default CardList;
