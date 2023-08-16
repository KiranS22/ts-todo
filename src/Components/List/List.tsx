import React, { useState } from "react";
import { FormProps, Todo } from "../../interfaces/interfaces";
import SingleTodo from "./SingleTodo";
import EditTodoModal from "../UpdatedTodoModal/EditTodoModal";
import { ToggleModal } from "../../types/types";

const List = ({ allTodos, setAllTodos }: FormProps) => {
  const [toggleModal, setToggleModal] = useState<ToggleModal>(false);
  const [editedTodo, setEditedTodo] = useState<Todo>({ title: "", description: "" });

  const deleteTodo = (id: number | undefined) => {
    console.log("id of todo", id);
    const updatedTodos = allTodos.filter((todo: Todo) => todo.id !== id);
    setAllTodos(updatedTodos);

    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const openEditModal = (todo: Todo): void => {
    setToggleModal(true);
    setEditedTodo({ ...todo });
  };

  const closeEditModal = (): void => {
    setToggleModal(false);
  };

  return (
    <>
      {allTodos.map((todo: Todo) => (
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
      {toggleModal ? (
        <EditTodoModal
          closeModal={closeEditModal}
          setToggleModal={setToggleModal}
          setAllTodos={setAllTodos}
          allTodos={allTodos}
          editedTodo={editedTodo}   
          setEditedTodo={setEditedTodo}
        />
      ) : null}
    </>
  );
};

export default List;
