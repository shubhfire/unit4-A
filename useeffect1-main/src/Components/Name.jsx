import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Name = () => {
  const [todo, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("")


  const saveInfo = () => 
  {
    setNewTodo()
    fetch("http://localhost:3004/todo", {
      method: "POST",
      headers:{
        "content-type":"application/json",
      },
      body: JSON.stringify({
        value: newTodo,
        isCompleted: false,
      }),
     
    }).then((r) => r.json())
      .then((d) => {
    
        setTodos([...todo , d])
        // setNewTodo(" ");
       
      });
};
useEffect(() => {
  fetch("http://localhost:3004/todo")
    .then((r) => r.json())
    .then((d) => {
      console.log("d",d)
      setTodos(d)
    });
  }, []);

return (

  <div>
    <h1>TodoName</h1>
    <input type="text"  onChange={({target})=>setNewTodo(target.valuef)}
    />
    <button onClick={saveInfo}>+</button>
    {todo.map((el) => (
      <h1 key={el.id}>{el.value}</h1>
    ))}
  </div>



) 
}
export default Name