import React from "react";

export default function Input({ task, setTask, addItem }) {
  const handleSubmit = () => {
    setTask([]);
  };

  return (
    <form
      className="bg-yellow-100 rounded-lg w-full max-w-[900px] p-4 flex flex-col justify-center items-center font-laila"
      onSubmit={(e) => {
        addItem(e);
      }}
    >
      <input
        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full sm:w-[60%] mb-2 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Enter to-do task..."
        type="text"
        name="task-input"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />

      <button
        className="bg-orange-600 px-8 py-2 rounded-md text-white font-semibold shadow-lg hover:bg-orange-500 active:bg-orange-300 hover:shadow-inner"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}
