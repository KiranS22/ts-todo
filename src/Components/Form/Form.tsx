import React, { useState } from "react";
import { FormProps, Todo } from "../../interfaces/interfaces";
import "./../../Resources/CSS/Form/Form.css";

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
    <div className="form-container d-flex flex-column align-items-center mt-4">
      <form onSubmit={submitTodo} className="task-form">
        <div className="form-group">
          <label htmlFor="task-title">Task Title:</label>
          <input
            id="task-title"
            className="form-control task-imp"
            type="text"
            placeholder="Title"
            value={todo.title}
            required
            onChange={(e: React.SyntheticEvent) =>
              setTodo({ ...todo, title: (e.target as HTMLInputElement).value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="task-description">Task Description:</label>
          <textarea
            id="task-description"
            className="form-control"
            placeholder="Description"
            value={todo.description}
            onChange={(e) =>
              setTodo({
                ...todo,
                description: e.target.value,
              })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Add Todo
        </button>
      </form>

      <button
        type="button"
        className="btn btn-danger mt-3"
        onClick={deleteAllTasks}
      >
        Delete All Tasks
      </button>
    </div>
  );
};

export default Form;
