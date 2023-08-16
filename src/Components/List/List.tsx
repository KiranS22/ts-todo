import React, { useState } from "react";
import { FormProps, Todo } from "../../interfaces/interfaces";
import SingleTodo from "./SingleTodo";
import EditTodoModal from "../UpdatedTodoModal/EditTodoModal";
import { ToggleModal } from "../../types/types";

const List = ({ allTodos, setAllTodos }: FormProps) => {
  const [toggleModal, setToggleModal] = useState<ToggleModal>(false);
  const deleteTodo = (id: number | undefined) => {
    console.log("id of todo", id);
    const updatedTodos = allTodos.filter((todo: Todo) => todo.id !== id);
    setAllTodos(updatedTodos);

    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };
  const openEditModal = (): void => {
    setToggleModal(true);
  };
  const closeModal = (): void => {
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
          closeModal={closeModal}
          setToggleModal={setToggleModal}
          toggleModal={toggleModal}
        />
      ) : null}
    </>
  );
};

export default List;
