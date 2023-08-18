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
    <div className="d-flex justify-content-between">
      <div className="w-25 custom-border">
        {" "}
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
      </div>
      <div className="w-25 custom-border">
        <button
          className="btn btn-danger"
          type="button"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
        <button
          className="btn  btn-dark text-white"
          type="button"
          onClick={() => {
            setToggleModal(true);
            openEditModal(todo);
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default SingleTodo;
