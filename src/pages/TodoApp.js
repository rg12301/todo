import { useState, useEffect } from "react";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";
import Footer from "../components/Footer.js";
import {
  addTodo,
  deleteTodo,
  getUser,
  handleSignOut,
  handleUpdateFinish,
  handleUpdateStart,
} from "../utils/firebaseUtils";
import { firestore } from "../utils/firebase";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  });

  async function getTodos() {
    const todoRef = await firestore()
      .collection("USERS")
      .doc(getUser())
      .collection("TODOS")
      .orderBy("createdAt", "desc")
      .get();
    let TODOS = [];
    todoRef.docs.map((doc) => {
      TODOS.push(doc.data());
    });
    setTodos(TODOS);
  }

  return (
    <div className="flex flex-col text-gray-700 min-h-screen relative pb-36">
      <nav className="mt-4 md:mt-8 mr-4 md:mr-8 flex flex-row-reverse">
        <button
          className="bg-gray-700 text-white border-2 border-gray-700 hover:bg-white hover:text-gray-700 px-5 py-2 rounded-lg font-bold focus:outline-none"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </nav>
      <h1 className="text-4xl font-bold text-center px-5 mx-auto mt-32">
        Todo App
      </h1>
      <main className="container px-5 mx-auto">
        <AddTodo addTodo={addTodo} />
        <TodoList
          todos={todos}
          onDelete={deleteTodo}
          onFinish={handleUpdateFinish}
          onStart={handleUpdateStart}
        />
      </main>
      <Footer />
    </div>
  );
};

export default TodoApp;
