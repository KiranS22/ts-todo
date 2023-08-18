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
    <div className="custom-form-container d-flex flex-column align-items-center mt-4">
      <form onSubmit={submitTodo} className="custom-task-form">
        <div className="custom-form-group">
          <label htmlFor="custom-task-title">Task Title:</label>
          <input
            id="custom-task-title"
            className="form-control custom-task-imp"
            type="text"
            placeholder="Title"
            value={todo.title}
            required
            onChange={(e: React.SyntheticEvent) =>
              setTodo({ ...todo, title: (e.target as HTMLInputElement).value })
            }
          />
        </div>
        <div className="custom-form-group">
          <label htmlFor="custom-task-description">Task Description:</label>
          <textarea
            id="custom-task-description"
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
        <button type="submit" className="custom-btn custom-btn-primary mt-3">
          Add Todo
        </button>
      </form>

      <button type="button" className="custom-btn custom-btn-danger mt-3" onClick={deleteAllTasks}>
        Delete All Tasks
      </button>
    </div>
  );
};

export default Form;
