import React, { useEffect, useState } from "react";
import "./App.css";
import Add from "./components/Add";
import Todo from "./components/Todo";
import Remove from "./components/Remove";
import Done from "./components/Done";
import Input from "./components/Input";

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
      <h2 className="subject">Todo List</h2>
      <div className="header">
        {/* 질문 : Input을 component로 만드는 게 좋은가요? */}
        <Input
          title={title}
          titleChangeHander={titleChangeHander}
          content={content}
          contentChangeHander={contentChangeHander}
        />
        <Add addFunction={clickAddButtonHandler}>Add</Add>
      </div>
      <div className="body">
        <h3>✗. Working</h3>
        <div className="list">
          {todolist.map((todo) => {
            if (todo.isDone === false) {
              return (
                <div key={todo.id} className="working">
                  <Todo todo={todo} />
                  <div className="button">
                    <Remove
                      todo={todo}
                      removeFunction={clickRemoveButtonHandler}
                    >
                      delete
                    </Remove>
                    <Done todo={todo} doneFunction={clickDoneButtonHandler}>
                      done
                    </Done>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <h3>✓. Done</h3>
        <div className="list">
          {todolist.map((todo) => {
            if (todo.isDone === true) {
              return (
                <div key={todo.id} className="done">
                  <Todo todo={todo} />
                  <div className="button">
                    <Remove
                      todo={todo}
                      removeFunction={clickRemoveButtonHandler}
                    >
                      delete
                    </Remove>
                    <Done todo={todo} doneFunction={clickDoneButtonHandler}>
                      cancle
                    </Done>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
