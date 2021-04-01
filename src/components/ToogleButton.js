const ToggleButton = ({
  color,
  toggle = false,
  onClick,
  children,
}) => {
  return (
    <button
      className={`${
        toggle
          ? `bg-${color}-400 text-gray-100`
          : `text-${color}-400 bg-white hover:bg-${color}-400 hover:text-gray-100`
      } text-xs px-2 px-1 my-2 rounded-full font-semibold focus:outline-none font-bold border-2 border-${color}-400`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ToggleButton;
