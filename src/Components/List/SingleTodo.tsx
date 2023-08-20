import React from "react";
import { SingleTodoProps } from "../../interfaces/interfaces";

const SingleTodo = ({
  todo,
  deleteTodo,
  openEditModal,
  setToggleModal,
}: SingleTodoProps) => {
  return (
    <div className="d-flex flex-column flex-sm-row justify-content-between todo-container mb-3">
      <div className="mb-2 mb-sm-0">
        <h4 className="todo-title">{todo.title}</h4>
        <p className="todo-desc">{todo.description}</p>
      </div>
      <div className="d-flex align-items-center">
        <button
          className="btn btn-danger me-2"
          type="button"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
        <button
          className="btn btn-dark text-white"
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
