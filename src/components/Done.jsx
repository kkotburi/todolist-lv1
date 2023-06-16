const Done = ({ todo, todo: { isDone }, doneFunction, children }) => {
  return (
    <button
      className={isDone ? "cancle-button" : "done-button"}
      onClick={() => doneFunction(todo.id)}
    >
      {children}
    </button>
  );
};

export default Done;
