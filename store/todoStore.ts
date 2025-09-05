import { create } from "zustand";
import { getApi, postApi, putApi, deleteApi } from "../services/fetchAPI";



type Todo = {
  id: string;
  title: string;
  description?: string | null;
  status: boolean;
};

type TodoStore = {
  todos: Todo[];
  fetchTodos: () => Promise<void>;
  addTodo: (title: string, description?: string) => Promise<void>;
  toggleTodo: (todo: Todo) => Promise<void>;
  removeTodo: (id: string) => Promise<void>;
  updateTodo: (id: string, title: string, description?: string) => Promise<void>;
};

export const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [],

  fetchTodos: async () => {
    const data = await getApi("/api/todos");
    set({ todos: data });
  },

  addTodo: async (title: string, description?: string) => {
    const newTodo = await postApi("/api/todos", { title, description });
    set({ todos: [...get().todos, newTodo] });
  },

  toggleTodo: async (todo: Todo) => {
    const updated = await putApi(`/api/todos/${todo.id}`, {
      title: todo.title,
      description: todo.description,
      status: !todo.status,
    });
    set({
      todos: get().todos.map((t) => (t.id === todo.id ? updated : t)),
    });
  },

  removeTodo: async (id: string) => {
    await deleteApi(`/api/todos/${id}`);
    set({
      todos: get().todos.filter((t) => t.id !== id),
    });
  },

  updateTodo: async (id: string, title: string, description?: string) => {
  const updated = await putApi(`/api/todos/${id}`, {
    title,
    description,
  });
  set({
    todos: get().todos.map((t) => (t.id === id ? updated : t)),
  });
  },
}));