const Todo = ({ todo }) => {
  return (
    <div className="todo">
      <div className="todo-title">{todo.title}</div>
      <div className="todo-content">{todo.content}</div>
    </div>
  );
};

export default Todo;
