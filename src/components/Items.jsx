import React from "react";
import Tasks from "./Tasks";

export default function Items({ todos, setTodos }) {
  return (
    <div className=" rounded-lg w-full max-w-[900px] my-4 p-4 flex flex-col justify-center items-center font-laila">
      {todos.map((todo) => (
        <Tasks
          key={todo.id}
          aim={todo.aim}
          todos={todos}
          todo={todo}
          setTodos={setTodos}
          id={todo.id}
        />
      ))}
    </div>
  );
}
