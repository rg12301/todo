import ToggleButton from "./ToogleButton";
import { getUser } from "../utils/firebaseUtils";

const Todo = ({ todo, onStart, onFinish, onDelete }) => {
  const user = getUser();
  return (
    <div className="flex justify-around space-x-2 my-0.5 w-full md:w-5/6 lg:w-2/3 xl:w-1/2 mx-auto py-2 px-2">
      <span className="bg-blue-50 rounded flex-grow py-2 px-5 font-semibold">
        {todo.content}
      </span>

      <ToggleButton
        color="green"
        toggle={todo.startStatus}
        onClick={() => {
          todo.finishStatus && onFinish(todo, user);
          onStart(todo, user);
        }}
      >
        Start
      </ToggleButton>

      <ToggleButton
        color="yellow"
        toggle={todo.finishStatus}
        onClick={() => {
          todo.startStatus && onStart(todo, user);
          onFinish(todo, user);
        }}
      >
        Finish
      </ToggleButton>

      <ToggleButton
        color="red"
        onClick={() => onDelete(todo, user)}
      >
        Delete
      </ToggleButton>
    </div>
  );
};

export default Todo;
