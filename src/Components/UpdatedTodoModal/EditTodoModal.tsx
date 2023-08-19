import { EditModalProps } from "../../interfaces/interfaces";

const EditTodoModal = ({
  closeModal,
  toggleModal,
  setToggleModal,
  editedTodo,
  setEditedTodo,
  submitEditedTodo,
}: EditModalProps) => {
  return (
    <div className={`modal ${toggleModal ? "fade show" : ""}`} tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered modal-fullscreen">
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
                className="form-control my-3"
                type="text"
                name="title"
                value={editedTodo.title}
                onChange={(e) =>
                  setEditedTodo({
                    ...editedTodo,
                    title: e.target.value,
                  })
                }
              />
              <input
                className="form-control"
                type="text"
                name="description"
                value={editedTodo.description}
                onChange={(e) =>
                  setEditedTodo({
                    ...editedTodo,
                    description: e.target.value,
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
    </div>
  );
};

export default EditTodoModal;
