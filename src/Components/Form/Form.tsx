import React from "react";
import { useState } from "react";
import { FormProps, Todo } from "../../interfaces/interfaces";

const Form = ({ allTodos, setAllTodos }: FormProps) => {
  const [todo, setTodo] = useState<Todo>({ title: "", description: "" });

  const submitTodo = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    let todoArray = [...allTodos, { ...todo, id: allTodos.length + 1 }];
    setAllTodos(todoArray);

    localStorage.setItem("todos", JSON.stringify(todoArray));
    setTodo({ title: "", description: "" });
  };

  const deleteAllTasks = (): void => {
    localStorage.clear();
    setAllTodos([]);
  };

  return (
    <div className="d-flex mt-4 custom-border justify-content-between align-items-center">
      <form onSubmit={submitTodo} className="d-flex">
        <label htmlFor="task-title" className="me-2">
          Task Title:
        </label>
        <input
          id="task-title"
          className="me-4 rounded"
          type="text"
          placeholder="Title"
          value={todo.title}
          required
          onChange={(e: React.SyntheticEvent) =>
            setTodo({ ...todo, title: (e.target as HTMLInputElement).value })
          }
        />
        <label htmlFor="task-description" className="me-2">
          Task Description:
        </label>
        <input
          id="task-description"
          type="text"
          className="me-4 rounded"
          placeholder="Description"
          value={todo.description}
          onChange={(e: React.SyntheticEvent) =>
            setTodo({
              ...todo,
              description: (e.target as HTMLInputElement).value,
            })
          }
        />

        <button type="submit" className="me-4 btn btn-info text-white">
          {" "}
          Add Todo
        </button>
      </form>

      <button className="btn btn-danger" onClick={deleteAllTasks}>
        Delete All Tasks
      </button>
    </div>
  );
};

export default Form;
