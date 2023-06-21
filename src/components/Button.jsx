const Button = ({ todo, className, onClick, title }) => {
  if (title === "Add") {
    return (
      <button className={className} onClick={onClick}>
        {title}
      </button>
    );
  } else {
    return (
      <button className={className} onClick={() => onClick(todo.id)}>
        {title}
      </button>
    );
  }
};

export default Button;
