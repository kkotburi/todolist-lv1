import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Todo from "./components/Todo";

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
  };

  // 삭제 button
  const clickDeleteButtonHandler = (id) => {
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

  return (
    <div className="app">
      <h2 className="subject">Todo List</h2>
      <div className="header">
        <Input
          title={title}
          titleChangeHander={titleChangeHander}
          content={content}
          contentChangeHander={contentChangeHander}
        />
        <Button
          className={"add-button"}
          onClick={clickAddButtonHandler}
          title="Add"
        />
      </div>
      <div className="body">
        <h3>✗. Working</h3>
        <div className="list">
          {todolist.map((todo) => {
            if (!todo.isDone) {
              return (
                <div key={todo.id} className="working">
                  <Todo todo={todo} />
                  <div className="button">
                    <Button
                      todo={todo}
                      className={"button-delete"}
                      onClick={clickDeleteButtonHandler}
                      title="delete"
                    />
                    <Button
                      todo={todo}
                      className={"button-done"}
                      onClick={clickDoneButtonHandler}
                      title="done"
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>
        <h3>✓. Done</h3>
        <div className="list">
          {todolist.map((todo) => {
            if (todo.isDone) {
              return (
                <div key={todo.id} className="done">
                  <Todo todo={todo} />
                  <div className="button">
                    <Button
                      todo={todo}
                      className={"button-delete"}
                      onClick={clickDeleteButtonHandler}
                      title="delete"
                    />
                    <Button
                      todo={todo}
                      className={"button-cancle"}
                      onClick={clickDoneButtonHandler}
                      title="cancle"
                    />
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
