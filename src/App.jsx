import React, { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Add from "./components/Add";
import Working from "./components/Working";
import Done from "./components/Done";

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
    // 새로운 형태의 객체 생성
    const newTodo = {
      id: todolist.length + 1,
      title,
      content,
      isDone: false,
    };

    // 배열에 추가
    setTodoList([...todolist, newTodo]);

    setTitle("");
    setContent("");

    // // data 저장
    // // 기존 data
    // let storedData = localStorage.getItem("myData");
    // let todoArray = [];
    // // 기존 data가 존재할 경우
    // if (storedData !== null) {
    //   todoArray = JSON.parse(storedData);
    // }
    // // 새 data 추가
    // todoArray.push(newTodo);
    // localStorage.setItem("myData", JSON.stringify(todoArray));
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
      <div className="header">
        <Input
          title={title}
          titleFunction={titleChangeHander}
          content={content}
          contentFunction={contentChangeHander}
        />
        <Add addFunction={clickAddButtonHandler} />
      </div>
      <div className="body">
        <h2>working</h2>
        <div className="todo">
          {todolist.map((todo) => {
            if (todo.isDone === false) {
              return (
                <Working
                  key={todo.id}
                  todo={todo}
                  removeFunction={clickRemoveButtonHandler}
                  doneFunction={clickDoneButtonHandler}
                />
              );
            }
          })}
        </div>
        <h2>done</h2>
        <div className="todo">
          {todolist.map((todo) => {
            if (todo.isDone === true) {
              return (
                <Done
                  key={todo.id}
                  todo={todo}
                  removeFunction={clickRemoveButtonHandler}
                  doneFunction={clickDoneButtonHandler}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
