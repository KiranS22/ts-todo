import React from "react";
import { EditModalProps } from "interfaces/interfaces";
import "./../../Resources/CSS/Modal/Modal.css";

const EditTodoModal = ({
  closeModal,
  submitEditedTodo,
  editedTodo,
  setEditedTodo,
  toggleModal,
}: EditModalProps) => {
  return (
    <>
      <div
        className={`modal fade ${toggleModal ? "show" : ""} `}
        tabIndex={-1}
        style={{ display: toggleModal ? "block" : "none" }}
      >
        <div className="modal-dialog modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Todo</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => closeModal()}
              ></button>
            </div>
            <div className="modal-body d-flex justify-content-center">
              <form className="form-group text-center custom-form">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    id="title"
                    value={editedTodo.title}
                    onChange={(e) =>
                      setEditedTodo({ ...editedTodo, title: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control custom-input"
                    id="description"
                    value={editedTodo.description}
                    onChange={(e) =>
                      setEditedTodo({
                        ...editedTodo,
                        description: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => closeModal()}
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
      </div>
    </>
  );
};

export default EditTodoModal;
