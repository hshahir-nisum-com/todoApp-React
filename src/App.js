import './App.css';
import React, { useEffect, useState } from 'react';
import  List from "./list";

function App() {

const [text,setText] = useState('');
const [todo,setTodo] = useState([])


const addItem =  (e) => {
  e.preventDefault();
    setTodo([text,...todo])
    console.log(todo)
    console.log(e)
    setText('')
}
  useEffect(()=>{
    console.log("useEffect",text)
    console.log("useEffect1",todo)
  })


const handleInut =  (e) =>{
     setText(e.target.value)
  }

  const deleteItem = (key) =>{
    const filteredItems= todo.filter(item =>
      item !==key);
    setTodo(filteredItems)

  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={addItem}> 
          <input type="text" placeholder="Enter Your Task" value={text} name="textBox" className="txtBox" onChange={handleInut}/>
          <button type="submit" className="submitBtn">Add</button>

        </form>
        <List todos= {todo} func = {deleteItem} />
      </header>
    </div>
  );
}

export default App;
