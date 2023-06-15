const Add = ({ addFunction, children }) => {
  return (
    <button className="add-button" onClick={addFunction}>
      {children}
    </button>
  );
};

export default Add;
