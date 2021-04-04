import Todo from "./Todo";

const TodoList = ({ todos, ...onEvents }) => {
  return (
    <div className="mx-auto grid grid-flow-row auto-rows-max">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} {...onEvents} />
      ))}
    </div>
  );
};

export default TodoList;
