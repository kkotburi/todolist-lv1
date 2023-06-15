const Remove = ({ todo, removeFunction, children }) => {
  return (
    <button className="remove-button" onClick={() => removeFunction(todo.id)}>
      {children}
    </button>
  );
};

export default Remove;
