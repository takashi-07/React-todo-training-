import React from 'react'

const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };
  
  return <div>
    <label>
      <input type="checkbox" checked={todo.complete} readOnly onChange={handleTodoClick}/>
    </label>
    {todo.name} 
    
    </div>;
};

export default Todo