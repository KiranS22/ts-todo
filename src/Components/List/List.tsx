import React from "react";
import { useState } from "react";

interface Todo {
  id?: number;
  title: string;
  description: string;
}

interface FormProps {
  setAllTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  allTodos: Todo[];
}

const List = ({ allTodos, setAllTodos }: FormProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [editedId, setEditedId] = useState<number | undefined>(undefined);
  const [editedField, setEditedField] = useState<"title" | "description">(
    "title"
  );
  const [editedValue, setEditedValue] = useState("");

  const openEditModal = (
    id: number | undefined,
    field: "title" | "description"
  ) => {
    setEditedId(id);
    setEditedField(field);
    setEditedValue(allTodos.find((todo) => todo.id === id)?.[field] || "");
    setModalVisible(true);
  };

  const closeEditModal = () => {
    setModalVisible(false);
    setEditedId(undefined);
    setEditedField("title");
    setEditedValue("");
  };

  const saveEditedValue = () => {
    const editedTodos = allTodos.map((todo: Todo) => {
      if (todo.id === editedId) {
        return { ...todo, [editedField]: editedValue };
      }
      return todo;
    });

    setAllTodos(editedTodos);
    localStorage.setItem("todos", JSON.stringify(editedTodos));
    closeEditModal();
  };

  const deleteTodo = (id: number | undefined) => {
    console.log("id of todo", id);
    const updatedTodos = allTodos.filter((todo: Todo) => todo.id !== id);
    setAllTodos(updatedTodos);
  };

  return (
    <>
      {allTodos.map((todo: Todo) => (
      
        <div key={todo.id}>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
          <button type="button" onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
          <button type="button" onClick={() => openEditModal(todo.id, "title")}>
            Edit
          </button>
        </div>
      ))}

      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit {editedField}</h2>
            <input
              type="text"
              value={editedValue}
              onChange={(e) => setEditedValue(e.target.value)}
            />
            <button onClick={saveEditedValue}>Save</button>
            <button onClick={closeEditModal}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};

export default List;
