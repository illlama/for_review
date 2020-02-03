import React from 'react';
import Card from './Card';

const CardList = () => {
  const todo = [
    { id: 1, title: 'normal,false', status: 'normal', done: false },
    { id: 2, title: 'normal,true', status: 'normal', done: true },
    { id: 3, title: 'urgent, false', status: 'urgent', done: false },
    { id: 4, title: 'urgent,true', status: 'urgent', done: true },
  ];
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
