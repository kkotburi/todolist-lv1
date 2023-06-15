const Done = ({ todo, doneFunction, children }) => {
  return (
    <button className="done-button" onClick={() => doneFunction(todo.id)}>
      {children}
    </button>
  );
};

export default Done;
