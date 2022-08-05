import React from 'react';
import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import {Todo} from './model'

// let name:number;
// name=4;

const App: React.FC =()=> {
  //specify state to be string 
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  

  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault();

    if(todo){
      setTodos([...todos ,{id:Date.now(), todo:todo , isDone:false}])
      setTodo("")
    }
  }

  const handleDone = (id:number)=>{
    setTodos(todos.map(
      (todo)=>todo.id === id ? {...todo ,isDone:!todo.isDone}: todo
    ))

  }
const handleDelete =(id:number) => {
  setTodos(
    todos.filter(
      (todo)=>todo.id !== id 
      )
  )
}
  console.log(todos)
  
  return (
    <div className="App">
      <span className="heading"> TODO APP</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} handleDone={handleDone} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
