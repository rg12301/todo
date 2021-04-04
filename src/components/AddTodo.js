import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { getUser } from "../utils/firebaseUtils";

const AddTodo = ({ addTodo }) => {
  const [input, setInput] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   addTodo(input);
  //   setInput("");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      content: input,
      startStatus: false,
      finishStatus: false,
    };
    addTodo(newTodo, getUser());
  };

  return (
    <form
      className="flex justify-center space-x-10 my-12 w-full md:w-5/6 lg:w-2/3 mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        className="w-8/12 h- rounded px-3 py-2 outline-none border-2 border-gray-300 focus:border-gray-500 font-semibold placeholder-gray-400"
        placeholder="Enter todo here..."
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
      <button
        className="bg-white border-2 border-gray-700 hover:bg-gray-700 hover:text-gray-100 hover:border-0 px-5 py-2 rounded-lg font-bold focus:outline-none"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
