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
  openEditModal: () => void
}

export interface EditModalProps {
  closeModal: ()=> void
  setToggleModal: React.Dispatch<React.SetStateAction<ToggleModal>>
  toggleModal: ToggleModal;


}
