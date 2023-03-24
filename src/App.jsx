import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Input from "./components/Input";
import Items from "./components/Items";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addItem = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      aim: task,
      done: false,
    };

    newTodo.aim
      ? setTodos((prevTodos) => {
          return [...prevTodos, newTodo];
        })
      : setTask("");

    setTask("");
  };

  return (
    <div className="bg-cyan-800 p-2 sm:p8 text-center w-full flex justify-center flex-col items-center">
      <div>
        <h1 className="text-white text-4xl font-bold font-laila p-2 mb-2">
          My Todo App
        </h1>
      </div>
      <Input task={task} setTask={setTask} addItem={addItem} />
      <Items todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
