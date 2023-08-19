import { ToggleModal } from "../types/types";

export interface Todo {
  id?: number;
  title: string;
  description: string;
}

export interface FormProps {
  setAllTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  allTodos: Todo[];
}

export interface SingleTodoProps {
  deleteTodo: (id: number | undefined) => void;
  todo: Todo;
  setAllTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  allTodos: Todo[];
  toggleModal: ToggleModal;
  setToggleModal: React.Dispatch<React.SetStateAction<ToggleModal>>;
  openEditModal: (todo: Todo) => void;
}

export interface EditModalProps {
  closeModal: () => void;
  submitEditedTodo: (e: React.SyntheticEvent,  id: number | undefined) => void
  setToggleModal: React.Dispatch<React.SetStateAction<ToggleModal>>;
  editedTodo: Todo;
  setEditedTodo: React.Dispatch<React.SetStateAction<Todo>>;
  toggleModal: ToggleModal;
}

export interface ListProps {
  allTodos: Todo[];
  setAllTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setToggleModal: React.Dispatch<React.SetStateAction<ToggleModal>>;
  toggleModal: ToggleModal;
  openEditModal: (todo: Todo) => void;
}
