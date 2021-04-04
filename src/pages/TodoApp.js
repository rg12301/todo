import { useState, useEffect } from "react";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";
import Footer from "../components/Footer.js";
import {
  addTodo,
  deleteTodo,
  getUser,
  handleSignOut,
  updateFinish,
  updateStart,
} from "../utils/firebaseUtils";
import { firestore } from "../utils/firebase";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log("fetching todo");
    getTodos();
  }, []);

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

  const handleAddTodo = (todo, user) => {
    addTodo(todo, user);
    const updatedTodos = [...todos];
    updatedTodos.unshift(todo);
    setTodos(updatedTodos);
  };

  const handleUpdateFinish = (todo, user) => {
    updateFinish(todo, user);
    const updatedTodos = todos.map((td) => {
      if (td.id === todo.id) {
        td.finishStatus = !todo.finishStatus;
      }
      return td;
    });
    setTodos(updatedTodos);
  };

  const handleUpdateStart = (todo, user) => {
    updateStart(todo, user);
    const updatedTodos = todos.map((td) => {
      if (td.id === todo.id) {
        td.startStatus = !todo.startStatus;
      }
      return td;
    });
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (todo, user) => {
    deleteTodo(todo, user);
    const updatedTodos = todos.filter((td) => {
      return td.id !== todo.id;
    });
    setTodos(updatedTodos);
  };

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
        <AddTodo addTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          onDelete={handleDeleteTodo}
          onFinish={handleUpdateFinish}
          onStart={handleUpdateStart}
        />
      </main>
      <Footer />
    </div>
  );
};

export default TodoApp;
