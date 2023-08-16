import React, { useState } from "react";
import { EditModalProps, Todo } from "../../interfaces/interfaces";

const EditTodoModal = ({
  closeModal,
  setToggleModal,
  setAllTodos,
  editedTodo,
  setEditedTodo,
  allTodos,
}: EditModalProps) => {
  const submitEditedTodo = (
    e: React.SyntheticEvent,
    id: number | undefined
  ): void => {
    e.preventDefault();

    const updatedTodos = allTodos.map((todo: Todo) =>
      todo.id === id
        ? {
            ...todo,
            title: editedTodo.title,
            description: editedTodo.description,
          }
        : todo
    );
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setAllTodos(updatedTodos);
    setToggleModal(false);
    closeModal();
  };

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Edit Todo</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => {
              setToggleModal(false);
              closeModal();
            }}
          ></button>
        </div>
        <div className="modal-body">
          <div>
            <input
              type="text"
              name="title"
              value={editedTodo.title}
              onChange={(e) =>
                setEditedTodo({
                  ...editedTodo,
                  title: (e.target as HTMLInputElement).value,
                })
              }
            />
            <input
              type="text"
              name="description"
              value={editedTodo.description}
              onChange={(e) =>
                setEditedTodo({
                  ...editedTodo,
                  description: (e.target as HTMLInputElement).value,
                })
              }
            />
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
            onClick={() => {
              setToggleModal(false);
              closeModal();
            }}
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={(e) => submitEditedTodo(e, editedTodo.id)}
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTodoModal;
