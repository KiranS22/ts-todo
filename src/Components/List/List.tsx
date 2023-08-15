import React from "react";
import { FormProps, Todo } from "../../interfaces/interfaces";



const List = ({ allTodos, setAllTodos }: FormProps) => {
  const deleteTodo = (id: number | undefined) => {
    console.log("id of todo", id);
    const updatedTodos = allTodos.filter((todo: Todo) => todo.id !== id);
    setAllTodos(updatedTodos);

    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const editTodoTitle = (id: number | undefined, e: React.SyntheticEvent) => {
    const editedTodos = allTodos.map((todo: Todo) => {
      if (todo.id === id) {
        return { ...todo, title: (e.target as HTMLInputElement).value };
      }
      return todo;
    });

    localStorage.setItem("todos", JSON.stringify(editedTodos));
setAllTodos(editedTodos)

  };

  const editTodoDescrription = (id: number | undefined, e: React.SyntheticEvent) => {
    const editedTodos = allTodos.map((todo: Todo) => {
      if (todo.id === id) {
        return { ...todo, description: (e.target as HTMLInputElement).value };
      }
      return todo;
    });

    localStorage.setItem("todos", JSON.stringify(editedTodos));
setAllTodos(editedTodos)

  };
  return (
    <>
      {allTodos.map((todo: Todo) => {


        return (
          <div key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <button type="button" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
            <button type="button">Edit</button>
          </div>
        );
      })}
    </>
  );
};

export default List;
