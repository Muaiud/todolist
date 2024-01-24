import TodoItems from './TodoItems';
import './css/Todo.css'
import {useState, useRef,useEffect} from 'react';

const Todo = () => {
    let count=0;
    const [todo,setTodo] = useState([]);
    const inputRef = useRef(null);

    const add =  ()=> {
        setTodo([...todo,{no:count++, text:inputRef.current.value, display:""}]);
        inputRef.current.value = "";
        localStorage.setItem("todo_count", count)
    }

    useEffect( ()=> {
        setTodo(JSON.parse(localStorage.getItem("todo")));
        count = localStorage.getItem("todo_count");
    },[]);

    useEffect( ()=> {
        setTimeout(()=> {
            console.log(todo);
            localStorage.setItem("todo", JSON.stringify(todo));
        }, 100);
},[todo]);

  return (
    <div className='todo'>
      <div className="todo-header">To-Do List</div>
      <div className="todo-add">
        <input ref={inputRef} type="text" placeholder="Add Your Task" className='todo-input'/>
        <div onClick= {()=> add()} className="todo-add-btn">ADD</div>
       </div>
       <div className="todolist">
        {todo.map((item,index)=>{
            return <TodoItems key={index} no={item.no} setTodo = {setTodo} display={item.display} text={item.text}/>
        })}
       </div>
    </div>
  )
}

export default Todo
