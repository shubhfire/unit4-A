
import { useState } from 'react';
import React, { useEffect } from "react"

import axios from "axios"

function App() {
  const [limit, setLimit ]= useState(0)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(1)
  const [todos, setTodos] = useState([])
  useEffect(() => {
    const getTodo = async () => {
      let r = await axios.get(`http://localhost:3004/todo?_page=${page}&_limit=${limit}`);

      let m = r.data
      console.log(m)

      setTodos(m)
      setTotal(Number(r.headers["x-total-count"]))
      console.log("header", r.headers["x-total-count"])
      console.log("r", r)
      console.log("total", total)
      console.log("limit",limit)
    };


    getTodo()
  }, [page,limit])

  return (
    <div className="App">
      {todos.map((todo) => (

        <div key={todo.id}>{todo.id}{":"}{todo.value}</div>

      ))}
      <button
        disabled={page <= 1}

        onClick={() => {
          if (page > 1) {
            setPage(page - 1)
          }
        }} >Next</button>

      <button>
        <select onChange={(e)=> setLimit(Number(e.target.value))} >
       
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="5">5</option>
          <option value="30">30</option>
        </select>
      </button>
      <button>
        <input type="number"
        value={limit}
        min={0}
        max={total}
        onChange={({target})=>setLimit(Number(target.value))}/>
      
      </button>



      <button

        disabled={total < page * limit}

        onClick={() => setPage(page + 1)}>Previous</button>
    </div>
  );
}

export default App;
