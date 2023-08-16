import React from "react";
import { FormProps, Todo } from "../../interfaces/interfaces";
import SingleTodo from "./SingleTodo";

const List = ({ allTodos, setAllTodos }: FormProps) => {
  const deleteTodo = (id: number | undefined) => {
    console.log("id of todo", id);
    const updatedTodos = allTodos.filter((todo: Todo) => todo.id !== id);
    setAllTodos(updatedTodos);

    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

const SubmitUpdatedTodoForm = ()=>{
  
}

  return (
    <>
      {allTodos.map((todo: Todo) => (
        <SingleTodo
          todo={todo}
          deleteTodo={deleteTodo}

        />
      ))}
    </>
  );
};

export default List;
