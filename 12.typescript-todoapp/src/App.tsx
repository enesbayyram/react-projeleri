import { useSelector } from "react-redux";
import "./App.css";
import TodoCreate from "./components/TodoCreate";
import { RootState } from "./redux/store";
import TodoList from "./components/TodoList";

function App() {
  const { todoList } = useSelector((store: RootState) => store.todo);

  console.log(todoList);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TodoCreate />
      <TodoList />
    </div>
  );
}

export default App;
