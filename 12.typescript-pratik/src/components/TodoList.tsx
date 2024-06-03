import React from "react";
import { ITodoType } from "../types/types";

interface ITodoListType {
  todoList: ITodoType[];
  deleteTodoById: (id: number) => void;
  changeColor : (id:number) => void;
}

function TodoList({ todoList , deleteTodoById , changeColor }: ITodoListType) {
  return (
    <div style={{display:'flex' , flexDirection:'column' , alignItems:'center' , justifyContent:'center' , marginTop:'50px'}}>
      {todoList &&
        todoList.map((todo, index) => (
          <div key={index} className={todo.isCompleted ? "color" :''} style={{display:'flex' , alignItems:'center' ,justifyContent:'space-between' , width:'300px' , backgroundColor:'orange',margin:'3px 0px' , padding:'10px' , borderRadius:'5px'}}>
            <div key={index}>{todo.content}</div>
            <div>
              <span onClick={()=> deleteTodoById(todo.id)} style={{marginRight:'20px'}}>sil</span>
              <span onClick={()=> changeColor(todo.id)}>renk değiştir</span>
            </div>
          </div>
        ))}
    </div>
  );
}

export default TodoList;
