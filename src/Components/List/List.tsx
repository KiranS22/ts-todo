import React from "react";
import SingleTodo from "./SingleTodo";
import "./../../Resources/CSS/Takboard/taskBoared.css";
import { FormProps, ListProps } from "../../interfaces/interfaces";

const List = ({ allTodos, setAllTodos, toggleModal, setToggleModal, openEditModal }:ListProps) => {
  const deleteTodo = (id: number |undefined) => {
    const updatedTodos = allTodos.filter((todo) => todo.id !== id);
    setAllTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <div className="container task-display-board mt-3">
      {allTodos.map((todo) => (
        <SingleTodo
          allTodos={allTodos}
          todo={todo}
          deleteTodo={deleteTodo}
          key={todo.id}
          setAllTodos={setAllTodos}
          toggleModal={toggleModal}
          setToggleModal={setToggleModal}
          openEditModal={openEditModal}
        />
      ))}
    </div>
  );
};

export default List;
