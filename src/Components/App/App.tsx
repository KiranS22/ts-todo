import React from "react";
import { useState, useEffect } from "react";
import "./../../Resources/App.css";
import Form from "../Form/Form";
import List from "../List/List";
interface Todo {
  id?: number;
  title: string;
  description: string;
}

type parseType = string | null
function App() {
  const [allTodos, setAllTodos] = useState<Todo[]>([]);
  useEffect(() => {
  let localTodos: parseType =  localStorage.getItem("todos")
console.log(localTodos);

    }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(allTodos));
  }, [allTodos]);
  return (
    <div className="App">
      <Form allTodos={allTodos} setAllTodos={setAllTodos} />
      <List allTodos={allTodos} setAllTodos={setAllTodos} />
    </div>
  );
}

export default App;
