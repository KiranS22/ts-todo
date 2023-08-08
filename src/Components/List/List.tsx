import React from "react";
import { useEffect } from "react";

interface Todo {
  id?:number
  title: string;
  description: string;
}

interface FormProps {
  setAllTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  allTodos: Todo[];
}

const List = ({ allTodos, setAllTodos }: FormProps) => {

  return (
    <>
      {allTodos.map((todo: Todo, index: number) => {
        return (
          <div>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default List;
