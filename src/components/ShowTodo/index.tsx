"use client";
import { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useEffect, useState } from "react";

const ShowTodo = () => {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();
  }, []);
  const client = generateClient<Schema>();

  const deleteTodo = async (id: string) => {
    await client.models.Todo.delete({ id });
  };
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} onClick={() => deleteTodo(todo.id)}>
          {todo.content}
        </div>
      ))}
    </div>
  );
};

export default ShowTodo;
