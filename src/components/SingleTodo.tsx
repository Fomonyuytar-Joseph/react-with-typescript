import React from "react";
import { useState } from "react";
import { Todo } from "../model";
import { AiFillEdit ,AiFillDelete } from "react-icons/ai"
import { MdDone} from "react-icons/md"
import "./styles.css";


type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  handleDone:(id:number)=>void
  handleDelete:(id:number)=>void
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos, handleDone ,handleDelete }) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  return (
    <form className="todos__single" onSubmit={(e)=>handleEdit(e,todo.id)}>

      {
        edit ? (


  <input value={editTodo} onChange={(e)=>setEditTodo(e.target.value) } className="todos__single--text"/>

        ):
      
      
        todo.isDone? (
          <s className="todos__single--text">{todo.todo}</s>

        ):(
        <span className="todos__single--text">{todo.todo}</span>
        )
      }
      
      <div>
        <span className="icon" onClick={()=> {
        
        if ( !edit && !todo.isDone){
          setEdit(!edit)
        }
      }
        }>
        <AiFillEdit/>
        </span>
        <span className="icon" onClick={()=>handleDelete(todo.id)}>
          <AiFillDelete/>
        </span>
        <span className="icon" onClick={()=>handleDone(todo.id)}>
          <MdDone/>
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;