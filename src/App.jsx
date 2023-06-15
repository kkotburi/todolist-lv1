import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Button from "./components/Button";

const App = () => {
  const [todolist, setTodoList] = useState([
    { id: 1, title: "algorithm 학습", content: "최빈값 구하기", isDone: false },
    { id: 2, title: "TIL 작성", content: "2023년 6월 14일", isDone: true },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleChangeHander = (event) => {
    setTitle(event.target.value);
  };

  const contentChangeHander = (event) => {
    setContent(event.target.value);
  };

  // 추가 button
  const clickAddButtonHandler = () => {
    // 1. 새로운 형태의 객체 생성
    const newTodo = {
      id: todolist.length + 1,
      title,
      content,
      done: false,
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

  // 완료 button
  const clickDoneButtonHandler = (id) => {
    const newTodolist = todolist.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodoList(newTodolist);
  };

  // 완료 button 'done'
  // const clickDoneButtonHandler = (done) => {
  //   const isDone = done ? false : true;
  //   console.log(isDone);
  //   setDone("취소");
  // };

  // 완료 button 'count'
  // const [count, setCount] = useState(0);
  // const [done, setDone] = useState("완료");

  // const clickDoneButtonHandler = (count) => {
  //   const plusCount = count + 1;
  //   setCount(plusCount);
  //   console.log(plusCount);
  //   const isDone = count % 2 === 0 ? "취소" : "완료";
  //   setDone(isDone);
  // };

  return (
    <div className="app">
      <div className="input">
        <div>
          제목:&nbsp; <input value={title} onChange={titleChangeHander} />
          내용:&nbsp; <input value={content} onChange={contentChangeHander} />
        </div>
        <Button addFunction={clickAddButtonHandler}>추가</Button>
      </div>
      <div className="body">
        <h2>working</h2>
        <div className="todo">
          {todolist.map((todo) => {
            return todo.isDone ? (
              ""
            ) : (
              <Todo
                key={todo.id}
                todo={todo}
                removeFunction={clickRemoveButtonHandler}
                doneFunction={clickDoneButtonHandler}
              />
            );
          })}
        </div>
        <h2>done</h2>
        <div className="todo">
          {todolist.map((todo) => {
            return todo.isDone ? (
              <Todo
                key={todo.id}
                todo={todo}
                removeFunction={clickRemoveButtonHandler}
                doneFunction={clickDoneButtonHandler}
              />
            ) : (
              ""
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

// <br /> 사용 금지
