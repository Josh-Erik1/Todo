import React, { useState } from "react";
import { FaBeer } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithubAlt,
  faGoogle,
  faFacebook,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Tasks = ({ setTodos, id, todos, todo }) => {
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.aim);

  // function to edit
  const editChange = (e, id) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, aim: editTodo } : todo))
    );
    setEdit(false);
  };

  // function to delete an item
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // function to show an item is completed
  const completed = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <form
      className="w-full bg-cyan-200 mb-2 sm:w-2/3 rounded-md p-2"
      onSubmit={(e) => editChange(e, todo.id)}
    >
      {edit ? (
        <input
          className="outline-none rounded-md bg-slate-200 p-2"
          type="text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : (
        <p
          className={`text-xl font-semibold ${
            todo.done ? "line-through" : "no-underline"
          } opacity-90`}
        >
          {todo.aim}
        </p>
      )}
      <div className=" flex justify-center p-2 mt-2  ">
        <span className="mx-2 cursor-pointer" onClick={() => setEdit(true)}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </span>
        <span className="mx-2 cursor-pointer" onClick={() => completed(id)}>
          <FontAwesomeIcon icon={faCheck} />{" "}
        </span>
        <span className="mx-2 cursor-pointer" onClick={() => deleteTodo(id)}>
          <FontAwesomeIcon icon={faTrashCan} />{" "}
        </span>
      </div>
    </form>
  );
};

export default Tasks;
