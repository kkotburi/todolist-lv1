const Todo = ({ todo, todo: { isDone }, removeFunction, doneFunction }) => {
  return (
    <div className={isDone ? "todo-done" : "todo-working"}>
      <div className="todo-title">{todo.title}</div>
      <div className="todo-content">{todo.content}</div>
      <div className="todo-button">
        <button
          className="todo-button-remove"
          onClick={() => removeFunction(todo.id)}
        >
          삭제
        </button>
        <button
          className="todo-button-done"
          onClick={() => doneFunction(todo.id)}
        >
          {isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default Todo;
