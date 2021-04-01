import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";
import Footer from "../components/Footer.js";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (input) => {
    const newTodo = {
      id: uuidv4(),
      content: input,
      startStatus: false,
      finishStatus: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleDelete = (id) => {
    const afterDelete = todos.filter(
      (todo) => todo.id !== id
    );
    setTodos(afterDelete);
  };

  const handleStart = (id) => {
    const updateTodos = [...todos];
    const index = updateTodos.findIndex(
      (todo) => todo.id === id
    );
    console.log(id, index);
    updateTodos[index].startStatus = !updateTodos[index]
      .startStatus;
    setTodos(updateTodos);
  };

  const handleFinish = (id) => {
    const updateTodos = [...todos];
    const index = updateTodos.findIndex(
      (todo) => todo.id === id
    );
    updateTodos[index].finishStatus = !updateTodos[index]
      .finishStatus;
    setTodos(updateTodos);
  };

  return (
    <div className="flex flex-col text-gray-700 min-h-screen relative pb-36">
      <h1 className="text-4xl font-bold text-center px-5 mx-auto mt-32">
        Todo App
      </h1>
      <main className="container px-5 mx-auto">
        <AddTodo addTodo={addTodo} />
        <TodoList
          todos={todos}
          onDelete={handleDelete}
          onFinish={handleFinish}
          onStart={handleStart}
        />
      </main>
      <Footer />
    </div>
  );
};

export default TodoApp;
