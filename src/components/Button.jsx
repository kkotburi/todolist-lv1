const Button = ({ addFunction, children }) => {
  return (
    <button className="button" onClick={addFunction}>
      {children}
    </button>
  );
};

export default Button;
