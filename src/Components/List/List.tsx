import React from "react";
import { useEffect } from "react";

interface Todo {
  id?: number;
  title: string;
  description: string;
}

interface FormProps {
  setAllTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  allTodos: Todo[];
}

const List = ({ allTodos, setAllTodos }: FormProps) => {
  const deleteTodo = (id: number | undefined) => {
    console.log("id of todo", id);
    const updatedTodos = allTodos.filter((todo: Todo) => todo.id !== id);
    setAllTodos(updatedTodos);

    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };
  return (
    <>
      {allTodos.map((todo: Todo) => {
        console.log(todo);

        return (
          <div key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <button type="button" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default List;
