import React, { useState } from 'react';

const Card = ({ todo_content }) => {
  const [todoClassName, setTodoClassName] = useState('tood-grey');

  const handleDoneOnClick = () => {
    if (todo_content.status === 'urgent') {
      setTodoClassName('todo-red');
    } else {
      setTodoClassName('todo-green');
    }
    console.log(todoClassName);
  };
  const handleOnClick = () => {
    if (todo_content.status === 'urgent') {
      setTodoClassName('todo-black');
    } else {
      setTodoClassName('todo-darkgreen');
    }
    console.log(todoClassName);
  };
  return (
    <li
      className={todoClassName}
      onClick={todo_content.done ? handleDoneOnClick : handleOnClick}
    >
      {todo_content.title}
    </li>
  );
};
export default Card;
