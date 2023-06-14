import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Button from "./components/Button";

const App = () => {
  const [todolist, setTodoList] = useState([
    { id: 1, title: "algorithm 학습", content: "최빈값 구하기" },
    { id: 2, title: "TIL 작성", content: "2023년 6월 14일" },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const nameChangeHander = (event) => {
    setTitle(event.target.value);
  };

  const ageChangeHander = (event) => {
    setContent(event.target.value);
  };

  // 추가 button
  const clickAddButtonHandler = () => {
    // 1. 새로운 형태의 객체 생성
    const newTodo = {
      id: todolist.length + 1,
      title,
      content,
    };

    // 2. 배열에 추가
    setTodoList([...todolist, newTodo]);

    setTitle("");
    setContent("");
  };

  // 삭제 button
  const clickRemoveButtonHandler = (id) => {
    const newTodolist = todolist.filter((todo) => todo.id !== id);
    setTodoList(newTodolist);
  };

  return (
    <div className="app">
      <div className="input">
        <div>
          제목:&nbsp; <input value={title} onChange={nameChangeHander} />
          내용:&nbsp; <input value={content} onChange={ageChangeHander} />
        </div>
        <Button addFunction={clickAddButtonHandler}>추가</Button>
      </div>
      <div className="body">
        {todolist.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              removeFunction={clickRemoveButtonHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;

// <br /> 사용 금지
