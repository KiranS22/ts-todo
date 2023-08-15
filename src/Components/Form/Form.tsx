import React from "react";
import { useState } from "react";
import { FormProps, Todo } from "../../interfaces/interfaces";
const Form = ({ allTodos, setAllTodos }: FormProps) => {
  const [todo, setTodo] = useState<Todo>({ title: "", description: "" });

  const submitTodo = (e: React.SyntheticEvent): void => {
    console.log("Running");
    e.preventDefault();
    let todoArray = [...allTodos, {...todo, id: allTodos.length + 1} ]
    setAllTodos(todoArray);

    localStorage.setItem("todos", JSON.stringify(todoArray));
    setTodo({ title: "", description: "" });
  };
  return (
    <>
      <form onSubmit={submitTodo}>
        <input
          type="text"
          placeholder="Title"
          value={todo.title}
          onChange={(e: React.SyntheticEvent) =>
            setTodo({ ...todo, title: (e.target as HTMLInputElement).value })
          }
        />
        <input
          type="text"
          placeholder="Description"
          value={todo.description}
          onChange={(e: React.SyntheticEvent) =>
            setTodo({
              ...todo,
              description: (e.target as HTMLInputElement).value,
            })
          }
        />
        <button type="submit"> Add Todo</button>
      </form>
    </>
  );
};

export default Form;
