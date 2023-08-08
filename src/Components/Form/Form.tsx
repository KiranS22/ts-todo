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
const Form = ({ allTodos, setAllTodos }: FormProps) => {
  const [todo, setTodo] = useState<Todo>({ title: "", description: "" });

  const submitTodo = (e: React.SyntheticEvent): void => {
    console.log("Running");
    e.preventDefault();
    setAllTodos([...allTodos, todo]);
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
