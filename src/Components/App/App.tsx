import React, { useState, useEffect } from "react";
import List from "./../List/List";
import EditTodoModal from "./../UpdatedTodoModal/EditTodoModal";
import "./../../Resources/CSS/App/App.css";
import { Todo } from "../../interfaces/interfaces";
import Form from "../Form/Form";
import { parseType } from "../../types/types";

function App() {
  const [toggleModal, setToggleModal] = useState(false);
  const [editedTodo, setEditedTodo] = useState<Todo>({
    title: "",
    description: "",
  });
  const [allTodos, setAllTodos] = useState<Todo[]>([]); // Initialize your todo list here

  const openEditModal = (todo: Todo): void => {
    console.log(toggleModal);

    setToggleModal(true);
    setEditedTodo({ ...todo });
  };

  const closeEditModal = (): void => {
    setToggleModal(false);
  };

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
  };
  useEffect(() => {
    let localTodos: parseType = localStorage.getItem("todos");
    if (localTodos) {
      setAllTodos(JSON.parse(localTodos as string)); // The as keyword is how we Typecast in TypeScript
      console.log("First useEffect Runnng ");
    }
  }, []);

  // Render the List component here, passing necessary props
  return (
    <>
      <h1 className="main-title"> ChoreChecker</h1>
      <div>
        {toggleModal ? (
          <EditTodoModal
            toggleModal={toggleModal}
            closeModal={closeEditModal}
            editedTodo={editedTodo}
            setEditedTodo={setEditedTodo}
            submitEditedTodo={(e) => submitEditedTodo(e, editedTodo.id)} // Pass the id here
            setToggleModal={setToggleModal}
          />
        ) : null}
        <Form allTodos={allTodos} setAllTodos={setAllTodos} />
        <List
          allTodos={allTodos}
          setAllTodos={setAllTodos}
          toggleModal={toggleModal}
          setToggleModal={setToggleModal}
          openEditModal={openEditModal}
        />
      </div>
    </>
  );
}

export default App;
