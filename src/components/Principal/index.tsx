"use client";

import { useState, useEffect, useMemo } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from "@aws-amplify/ui-react";

Amplify.configure(outputs);

const client = generateClient<Schema>();

const Principal = () => {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  console.log(todos)
  const [contentState, setContent] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();
  }, []);

  useEffect(() => {
    if (contentState !== "") {
      client.models.Todo.create({
        content: contentState,
        taskid:userId
      });
    }
  }, [contentState]);
  function createTodo( userId :string) {
    const content = window.prompt("Todo content");
    console.log(content);
    if (content && content !== "") {
      setContent(content);
      setUserId(userId);
    } else {
      alert("No se permiten espacios en el contenido");
    }

  }

  function deleteTodo(id: string) {
    client.models.Todo.delete({ id });
  }
  return (
    <Authenticator>
      {({ signOut, user }) => {
        console.log(user);
        return (
          <main>
            <h1>My todos for {user?.signInDetails?.loginId}</h1>
            {user && <button onClick={()=>createTodo(user.userId)}>+ new</button>}
            <ul>
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  onClick={() => deleteTodo(todo.id)}
                  className="text-black"
                >
                  {todo.content}
                </li>
              ))}
            </ul>
            <button onClick={signOut}>signOut</button>
            <div>
              🥳 App successfully hosted. Try creating a new todo.
              <br />
              <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
                Review next steps of this tutorial.
              </a>
            </div>
          </main>
        );
      }}
    </Authenticator>
  );
};

export default Principal;
