"use client";
import { useState, useEffect } from "react";
import { useTodoStore } from "@/store/todoStore";

export default function Todos() {
  const { todos, fetchTodos, addTodo, toggleTodo, removeTodo, updateTodo } = useTodoStore();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  async function handleAdd() {
    if (!title.trim()) return;
    await addTodo(title, description);
    setTitle("");
    setDescription("");
  }

  async function handleUpdate(id: string) {
    if (!editTitle.trim()) return;
    await updateTodo(id, editTitle, editDescription);
    setEditingId(null);
    setEditTitle("");
    setEditDescription("");
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-md mx-auto text-black">
        <h1 className="text-3xl font-bold mb-6 text-center">Todo List</h1>
        {/* Yeni görev ekleme */}
        <div className="bg-white shadow rounded-lg p-4 space-y-3">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add New Task..."
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add Description..."
            rows={2}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 rounded-lg transition"
          >
            ➕ Add Task
          </button>
        </div>

        {/* Todo listesi */}
        <ul className="mt-6 space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-start bg-white shadow rounded-lg p-3"
            >
              {/* Checkbox */}
              <input
                type="checkbox"
                checked={todo.status}
                onChange={() => toggleTodo(todo)}
                className="h-6 w-6 mt-1 text-blue-500 cursor-pointer"
              />

              {/* Düzenleme modu */}
              {editingId === todo.id ? (
                <div className="ml-3 flex-1 space-y-2">
                  <input
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="w-full border rounded px-2 py-1"
                  />
                  <textarea
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                    className="w-full border rounded px-2 py-1"
                    rows={2}
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleUpdate(todo.id)}
                      className="bg-blue-500 text-white font-bold px-3 py-1 rounded hover:bg-blue-600 cursor-pointer" 
                    >
                      💾 Save
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="bg-white text-black font-bold px-3 py-1 rounded border border-2 border-gray-400 hover:bg-gray-400 cursor-pointer"
                    >
                      ❌ Cancel
                    </button>
                  </div>
                </div>
              ) : (
                /* Normal görünüm */
                <div className="ml-3 flex-1">
                  <div className="flex justify-between items-center">
                    <div>
                      <p
                        className={`font-medium ${
                          todo.status
                            ? "line-through text-gray-400"
                            : "text-gray-800"
                        }`}
                      >
                        {todo.title}
                      </p>
                      {todo.description && (
                        <p className="text-sm text-gray-500">
                          {todo.description}
                        </p>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setEditingId(todo.id);
                          setEditTitle(todo.title);
                          setEditDescription(todo.description || "");
                        }}
                        className="text-blue-500 hover:text-blue-700 cursor-pointer hover:text-2xl transition"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => removeTodo(todo.id)}
                        className="text-red-500 hover:text-red-700 text-xl cursor-pointer hover:text-2xl transition"
                      >
                        ❌
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}