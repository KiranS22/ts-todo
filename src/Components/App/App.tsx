import React from "react";
import { useState, useEffect } from "react";
import "./../../Resources/CSS/App.css";
import Form from "../Form/Form";
import List from "../List/List";
import { Todo } from "../../interfaces/interfaces";
import { parseType } from "../../types/types";


function App() {
  const [allTodos, setAllTodos] = useState<Todo[]>([]);
  useEffect(() => {
    let localTodos: parseType = localStorage.getItem("todos");
    if (localTodos) {
      setAllTodos(JSON.parse(localTodos as string)); // The as keyword is how we Typecast in TypeScript
      console.log("First useEffect Runnng ");
    }
  }, []);

  return (
    <div className="App">
      <Form allTodos={allTodos} setAllTodos={setAllTodos} />
      <List allTodos={allTodos} setAllTodos={setAllTodos} />
      
    </div>
  );
}

export default App;
