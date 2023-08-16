import React from "react";
import { SingleTodoProps } from "../../interfaces/interfaces";

const SingleTodo = ({
  todo,
  deleteTodo,
  allTodos,
  toggleModal,
  setToggleModal,
  setAllTodos,
  openEditModal,
}: SingleTodoProps) => {
  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      <button type="button" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
      <button
        type="button"
        onClick={() => {
          setToggleModal(true);
          openEditModal();
        }}
      >
        Edit
      </button>
    </div>
  );
};

export default SingleTodo;
