import React from "react";
import { SingleTodoProps } from "../../interfaces/interfaces";

const SingleTodo = ({
  todo,
  deleteTodo,
  openEditModal,
  setToggleModal,
}: SingleTodoProps) => {
  return (
    <div className="d-flex justify-content-between todo-container">
      <div className="w-25 px-4">
        <h4 className="todo-title">{todo.title}</h4>
        <p className="todo-desc">{todo.description}</p>
      </div>
      <div className="task-card-button-container px-4">
        <button
          className="btn btn-danger"
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
