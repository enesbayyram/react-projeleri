import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
import { ITodoType } from './types/types';

function App() {

  const [todo , setTodo] = useState<string>('');
  const [todoList , setTodoList]  = useState<ITodoType[]>([]);

  const addTodo = (todo :ITodoType )=>{
    if(todo.content.trim().length>0){
      setTodoList([...todoList , todo]);
      setTodo('');
    }else{
      alert("Boş eklenemez")
    }
  }

  const deleteTodoById = (id : number)=>{
    setTodoList([...todoList.filter((todo)=> todo.id!==id)])
  }

  const changeColor = (id :number)=>{
      setTodoList([...todoList.map((todo)=> todo.id!==id ? todo : {...todo , isCompleted:!todo.isCompleted})])
  }

  return (
    <div>
      <TodoCreate addTodo={addTodo} todo={todo} setTodo={setTodo}/>
      <TodoList changeColor={changeColor} deleteTodoById={deleteTodoById} todoList = {todoList}/>
    </div>
  )
}

export default App
