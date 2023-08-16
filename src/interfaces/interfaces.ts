export interface Todo {
  id?: number;
  title: string;
  description: string;
}

export interface FormProps {
  setAllTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  allTodos: Todo[];
}

export interface Listprops {
  deleteTodo: (id: number | undefined) => void;
  todo: Todo


}
