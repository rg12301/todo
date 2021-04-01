import ToggleButton from "./ToogleButton";

const Todo = ({
  id,
  content,
  startStatus,
  finishStatus,
  onStart,
  onFinish,
  onDelete,
}) => {
  return (
    <div className="flex justify-around space-x-2 my-0.5 w-full md:w-5/6 lg:w-2/3 xl:w-1/2 mx-auto py-2 px-2">
      <span className="bg-blue-50 rounded flex-grow py-2 px-5 font-semibold">
        {content}
      </span>

      <ToggleButton
        color="green"
        toggle={startStatus}
        onClick={() => {
          finishStatus && onFinish(id);
          onStart(id);
        }}
      >
        Start
      </ToggleButton>

      <ToggleButton
        color="yellow"
        toggle={finishStatus}
        onClick={() => {
          startStatus && onStart(id);
          onFinish(id);
        }}
      >
        Finish
      </ToggleButton>

      <ToggleButton
        color="red"
        onClick={() => onDelete(id)}
      >
        Delete
      </ToggleButton>
    </div>
  );
};

export default Todo;
