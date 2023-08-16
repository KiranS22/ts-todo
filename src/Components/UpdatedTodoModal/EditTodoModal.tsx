import React from "react";
import { EditModalProps } from "../../interfaces/interfaces";

const EditTodoModal = ({ closeModal, setToggleModal }: EditModalProps) => {
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
          <div></div>
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
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTodoModal;
