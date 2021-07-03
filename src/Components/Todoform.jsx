import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value
    : '');

  const inputRef = useRef(null);
  useEffect(()=> {
      inputRef.current.focus()
  })

  const handleChange=(e)=>{
      setInput(e.target.value)
  }
  const handleSubmit=(e)=>{
      e.preventDefault();
      props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
      });
      setInput('');
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
    {props.edit ? ( 
        <>
       <input
        type="text"
        className="todo-input"
        placeholder="Edit todo-list"
        value={input}
        name="text"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button">edit todo-List</button>
      </>) :
      (<> 
       <input
        type="text"
        className="todo-input edit"
        placeholder="Add to todo-list"
        value={input}
        name="text"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button edit">Add to todo-List</button> </> )}    
     
    </form>
  );
}

export default TodoForm;
