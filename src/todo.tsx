import React, { useState } from "react";

const Todo = () => {
  const [nameTodo, setNameTodo] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameTodo(e.target.value);
  };

  const handleAddTodo = () => {
    setTodoList([...todoList, nameTodo]);
    setNameTodo(""); 
  };


  const handleClearTodo = (index: number) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1);
    setTodoList(updatedTodoList);
    
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={nameTodo} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo} 
         <button onClick={() => handleClearTodo(index)}>Clear</button>
          </li>
        ))}
    
      </ul>
      
    </div>
  );
};

export default Todo;
