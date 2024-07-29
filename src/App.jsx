import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import EnjoyMsg from "./components/EnjoyMsg";
import TodoAppContextProvider from "./store/todo-items-store";
import "./App.css";

function App() {
  return (
    <TodoAppContextProvider>
      <center>
        <AppName />
        <AddTodo />
        <EnjoyMsg></EnjoyMsg>
        <TodoItems></TodoItems>
      </center>
    </TodoAppContextProvider>
  );
}

export default App;
